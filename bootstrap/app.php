<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        function () {
            Route::get('/up', function () {
        return response('OK', 200);
    });

        // ── Main web routes ──────────────────────────────────
        Route::middleware('web')
            ->group(base_path('routes/web.php'));

        // ── Admin routes (/admin/...) ────────────────────────
        Route::middleware('web')
            ->prefix('admin')
            ->name('admin.')
            ->group(base_path('routes/admin.php'));

        // ── Console commands ─────────────────────────────────
        Route::middleware('web')
            ->group(base_path('routes/console.php'));
    }
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\SetLocale::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        // Route-level middleware for admin-only areas.
        $middleware->alias([
            'admin' => \App\Http\Middleware\admin::class,
            'admin.permissions' => \App\Http\Middleware\CheckAdminPermissions::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();

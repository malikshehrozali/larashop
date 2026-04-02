<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class CheckAdminPermissions
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$permissions): Response
    {
        $admin = Auth::guard('admin')->user();

        if (! $admin) {
            abort(401);
        }

        // Super admin bypasses everything
        if ($admin->is_super_admin) {
            return $next($request);
        }

        // Check if admin has ANY of the required permissions
        if (! $admin->hasAnyPermission($permissions)) {
            if ($request->expectsJson()) {
                abort(403, 'Insufficient permissions.');
            }

            // Redirect back with an error flash
            return redirect()
                ->route('admin.dashboard')
                ->withErrors(['permission' => 'You do not have access to that page.']);
        }

        return $next($request);
    }
}

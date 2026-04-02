<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class admin
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! Auth::guard('admin')->check()) {
            return redirect()->route('admin.login');
        }

        $admin = Auth::guard('admin')->user();

        // Account deactivated
        if (! $admin->is_active) {
            Auth::guard('admin')->logout();
            return redirect()->route('admin.login')
                             ->withErrors(['email' => 'Your account has been deactivated.']);
        }
        return $next($request);
    }
}

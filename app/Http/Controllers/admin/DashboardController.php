<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        return inertia('admin/dashboard', [
            'admin' => Auth::guard('admin')->user()->load('role.permissions'),
        ]);
    }
}

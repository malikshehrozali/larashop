<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        return inertia('Admin/Dashboard', [
            'admin' => Auth::guard('admin')->user()->load('role.permissions'),
        ]);
    }
}

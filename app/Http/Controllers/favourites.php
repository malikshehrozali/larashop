<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class favourites extends Controller
{
    public function index(){
        return inertia('favourites/index');
    }
}

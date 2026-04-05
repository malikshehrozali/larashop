<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/shop', function(){
    return Inertia::render('shop/index');
})->name('shop');



Route::middleware(['auth'])->group(function () {
    Route::get('profile', function () {
        return Inertia::render('profile');
    })->name('profile');
    Route::get('favourites', [Favourites::class, 'index'])->name('favourites');
});



Route::get('/lang/{locale}', function ($locale) {
    $supported = config('app.locales',['en', 'ur']);
    if(!in_array($locale, $supported, true)) {
        abort(400);
    }
    session(['locale' => $locale]);
    return redirect()->back();
})->name('lang');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

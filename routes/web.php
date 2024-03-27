<?php

use App\Http\Controllers\ApotekController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Beranda', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/database', [ApotekController::class, 'database'])->name('apotek.database');
    Route::post('/dashboard', [ApotekController::class, 'store'])->name('apotek.store');

    Route::get('/database/edit/{apoteks}', [ApotekController::class, 'edit'])->name('apotek.edit');
    Route::patch('/database/edit/{apoteks}', [ApotekController::class, 'update'])->name('apotek.update');
    // Route::post('/dashboard', [ApotekController::class, 'store'])->name('apotek.store');
});

require __DIR__.'/auth.php';

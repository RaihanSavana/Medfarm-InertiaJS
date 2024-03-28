<?php

use App\Http\Controllers\ApotekController;
use App\Http\Controllers\PemasokController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Apoteks;
use App\Models\Pemasok;


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

    Route::post('/dashboard', [ApotekController::class, 'store'])->name('apotek.store');

    Route::post('/pemasok', [PemasokController::class, 'store'])->name('pemasok.store');
    Route::get('/pemasok', function () {return Inertia::render('Pemasok', ['pemasoks' => Pemasok::get()]);})->name('pemasok');
    Route::get('/pemasok/edit/{pemasoks}', [PemasokController::class, 'edit'])->name('pemasok.edit');
    Route::patch('/pemasok/edit/{pemasoks}', [PemasokController::class, 'update'])->name('pemasok.update');


    Route::get('/database', function () {return Inertia::render('Database', ['apoteks' => Apoteks::get()]);})->name('database');
    Route::get('/database/edit/{apoteks}', [ApotekController::class, 'edit'])->name('apotek.edit');
    Route::patch('/database/edit/{apoteks}', [ApotekController::class, 'update'])->name('apotek.update');
});

require __DIR__ . '/auth.php';

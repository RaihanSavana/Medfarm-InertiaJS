<?php

use App\Http\Controllers\ApotekController;
use App\Http\Controllers\JenisObatController;
use App\Http\Controllers\PemasokController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TmasukController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Apoteks;
use App\Models\JenisObat;
use App\Models\Pemasok;
use App\Models\Tmasuk;

Route::get('/', function () {
    return Inertia::render('Beranda', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', ['jenis_obats' => JenisObat::get()]);
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/pemasok', function () {return Inertia::render('Pemasok', ['pemasoks' => Pemasok::get()]);})->name('pemasok');
    Route::post('/pemasok', [PemasokController::class, 'store'])->name('pemasok.store');
    Route::get('/pemasok/edit/{pemasoks}', [PemasokController::class, 'edit'])->name('pemasok.edit');
    Route::patch('/pemasok/edit/{pemasoks}', [PemasokController::class, 'update'])->name('pemasok.update');

    Route::get('/jenisobat', function () {return Inertia::render('JenisObat', ['jenis_obats' => JenisObat::get()]);})->name('jenisObat');
    Route::post('/jenisobat', [JenisObatController::class, 'store'])->name('jenisObat.store');
    Route::get('/jenisobat/edit/{jenis_obats}', [JenisObatController::class, 'edit'])->name('jenisObat.edit');
    Route::patch('/jenisobat/edit/{jenis_obats}', [JenisObatController::class, 'update'])->name('jenisObat.update');

    Route::get('/transaksi-masuk', function () {return Inertia::render('TransaksiMasuk', ['apoteks' => Apoteks::get(), 'pemasoks' => Pemasok::get(), 'tmasuks' => Tmasuk::get()]);})->name('tmasuk');
    Route::post('/transaksi-masuk', [TmasukController::class, 'store'])->name('tmasuks.store');

    Route::get('/database', function () {return Inertia::render('Database', ['apoteks' => Apoteks::get(), 'jenis_obats' => JenisObat::get()]);})->name('database');
    Route::post('/dashboard', [ApotekController::class, 'store'])->name('apotek.store');
    Route::get('/database/edit/{apoteks}', [ApotekController::class, 'edit'])->name('apotek.edit');
    Route::patch('/database/edit/{apoteks}', [ApotekController::class, 'update'])->name('apotek.update');
});

require __DIR__ . '/auth.php';

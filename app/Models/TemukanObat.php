<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemukanObat extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'image',
        'jenis',
        'deskripsi',
        'indikasi_umum',
        'komposisi',
        'dosis',
        'aturan_pakai',
        'golongan_produk',
        'kemasan',
        'no_registrasi',
    ];
}

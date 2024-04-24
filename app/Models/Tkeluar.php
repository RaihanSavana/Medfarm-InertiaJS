<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tkeluar extends Model
{
    use HasFactory;

    protected $fillable = [
        'apotek_id',
        'pelanggan_id',
        'jumlah_keluar',
        'harga',
        'harga_total',
    ];
}

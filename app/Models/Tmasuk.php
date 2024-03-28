<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tmasuk extends Model
{
    use HasFactory;

    protected $fillable = [
        'apotek_id',
        'pemasok_id',
        'jumlah_masuk',
        'harga',
        'harga_total',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apoteks extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_obat',
        'jenis_obat_id',
        'stok_obat',
        'harga',
    ];

    public function jenisobats()
    {
        return $this->belongsTo(JenisObat::class);
    }
}

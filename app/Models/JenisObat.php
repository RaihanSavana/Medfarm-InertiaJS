<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisObat extends Model
{
    use HasFactory;

    protected $fillable = [
        'jenis_obat',
    ];

    public function apoteks()
    {
        return $this->hasMany(Apoteks::class);
    }
}

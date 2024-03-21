<?php

namespace App\Http\Controllers;
use App\Models\Apoteks;

use Illuminate\Http\Request;

class ApotekController extends Controller
{
    public function store(Request $request){
        $data = $request->validate([
            'nama_obat' => 'required',
            'jenis_obat' => 'required',
            'stok_obat' => 'required',
            'harga' => 'required'
        ]);

        Apoteks::create($data);
    }
}

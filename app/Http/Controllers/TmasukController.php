<?php

namespace App\Http\Controllers;

use App\Models\Tmasuk;
use Illuminate\Http\Request;

class TmasukController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'pemasok_id' => 'required',
            'apotek_id' => 'required',
            'jumlah_masuk' => 'required',
            'harga' => 'required',
            'harga_total' => 'required',
        ]);

        Tmasuk::create($data);

        return back()->with('message', 'Transaksi Masuk berhasil ditambah');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Tkeluar;
use Illuminate\Http\Request;

class TkeluarController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'pemasok_id' => 'required',
            'apotek_id' => 'required',
            'jumlah_keluar' => 'required',
            'harga' => 'required',
            'harga_total' => 'required',
        ]);

        Tkeluar::create($data);

        return back()->with('message', 'Transaksi keluar berhasil ditambah');
    }
}

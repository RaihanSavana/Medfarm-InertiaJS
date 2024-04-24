<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PelangganController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required',
        ]);

        Pelanggan::create($data);

        return back()->with('message', 'Pelanggan berhasil ditambah');
    }

    public function edit(Pelanggan $pelanggans){
        return Inertia::render(
            'EditPemasok',['pelanggans' => $pelanggans
            ]);
    }

    public function update(Request $request, Pelanggan $pelanggans){
        $data = $request->validate([
            'nama',
        ]);
        $pelanggans -> update($data);

        return redirect(route('pelanggan'))->with('message', 'pelanggan berhasil di update');
    }
}

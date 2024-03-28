<?php

namespace App\Http\Controllers;

use App\Models\JenisObat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JenisObatController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'jenis_obat' => 'required',
        ]);

        JenisObat::create($data);

        return back()->with('message', 'Jenis Obat berhasil ditambah');
    }

    public function edit(JenisObat $jenis_obats){
        return Inertia::render(
            'EditJenisObat',['jenis_obats' => $jenis_obats
            ]);
    }

    public function update(Request $request, JenisObat $jenis_obats){
        $data = $request->validate([
            'jenis_obat' => 'required',
        ]);
        $jenis_obats -> update($data);

        return redirect(route('jenisObat'))->with('message', 'Jenis Obat berhasil di update');
    }
}

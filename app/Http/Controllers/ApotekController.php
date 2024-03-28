<?php

namespace App\Http\Controllers;

use App\Models\Apoteks;
use App\Models\JenisObat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class ApotekController extends Controller
{
    public function update(Request $request, Apoteks $apoteks){
        $data = $request->validate([
            'nama_obat' => 'required',
            'jenis_obat_id' => 'required',
            'stok_obat' => 'required',
            'harga' => 'required'
        ]);
        $apoteks -> update($data);

        return redirect(route('database'))->with('message', 'Obat berhasil di update');
    }

    public function edit(Apoteks $apoteks){

        $jenis_obat = JenisObat::all();

        return Inertia::render('EditObat', [
            'apoteks' => $apoteks,
            'jenis_obat' => $jenis_obat // Use 'jenis_obat' instead of 'jenis_obats'
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nama_obat' => 'required',
            'jenis_obat_id' => 'required',
            'stok_obat' => 'required',
            'harga' => 'required'
        ]);

        Apoteks::create($data);

        return back()->with('message', 'Obat berhasil ditambah');
    }
}

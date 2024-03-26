<?php

namespace App\Http\Controllers;

use App\Models\Apoteks;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class ApotekController extends Controller
{
    public function read()
    {
        return Inertia::render(
            'Database',
            ['apoteks' => Apoteks::get()]
        );
    }

    public function index()
    {
        $apoteks = Apoteks::all();
        return response()->json($apoteks);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'nama_obat' => 'required',
            'jenis_obat' => 'required',
            'stok_obat' => 'required',
            'harga' => 'required'
        ]);

        Apoteks::create($data);

        return back()->with('message', 'Obat berhasil ditambah');
    }
}

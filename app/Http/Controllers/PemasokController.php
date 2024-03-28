<?php

namespace App\Http\Controllers;

use App\Models\Pemasok;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PemasokController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'nama_pemasok' => 'required',
        ]);

        Pemasok::create($data);

        return back()->with('message', 'Pemasok berhasil ditambah');
    }

    public function edit(Pemasok $pemasoks){
        return Inertia::render(
            'EditPemasok',['pemasoks' => $pemasoks
            ]);
    }

    public function update(Request $request, Pemasok $pemasoks){
        $data = $request->validate([
            'nama_pemasok' => 'required',
        ]);
        $pemasoks -> update($data);

        return redirect(route('pemasok'))->with('message', 'Pemasok berhasil di update');
    }
}

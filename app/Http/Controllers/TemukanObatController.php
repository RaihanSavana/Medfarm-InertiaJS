<?php

namespace App\Http\Controllers;

use App\Models\TemukanObat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class   TemukanObatController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $data = $request->validate([
            'nama' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'jenis' => 'required',
            'deskripsi' => 'required',
            'indikasi_umum' => 'required',
            'komposisi' => 'required',
            'dosis' => 'required',
            'aturan_pakai' => 'required',
            'golongan_produk' => 'required',
            'kemasan' => 'required',
            'no_registrasi' => 'required',
        ]);

        // Get the uploaded image
        $image = $request->file('image');

        // Get the original file name
        $fileName = $image->getClientOriginalName();

        // Move the uploaded image to the specified directory
        $image->move(public_path('images/obat-images'), $fileName);

        // Construct the image path
        $imagePath = '/images/obat-images/' . $fileName;

        // Save the image path in the database along with other data
        $data['image'] = $imagePath;

        // Create a new TemukanObat record with the validated data
        TemukanObat::create($data);

        // Redirect back with a success message
        return back()->with('message', 'Obat berhasil ditambah');
    }
    public function index($jenis)
    {
        $temukanObats = TemukanObat::where('jenis', $jenis)->get();
        return inertia('TampilBarang', ['temukanObats' => $temukanObats]);
    }
    public function indexx(TemukanObat $temukan_obats){
        return Inertia::render(
            'DetailObat',['temukan_obats' => $temukan_obats
            ]);
    }

}

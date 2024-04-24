<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('temukan_obats', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('image');
            $table->string('jenis');
            $table->longText('deskripsi');
            $table->longText('indikasi_umum');
            $table->longText('komposisi');
            $table->longText('dosis');
            $table->longText('aturan_pakai');
            $table->string('golongan_produk');
            $table->string('kemasan');
            $table->string('no_registrasi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temukan_obats');
    }
};

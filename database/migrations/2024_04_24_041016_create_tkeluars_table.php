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
        Schema::create('tkeluars', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('apotek_id');
            $table->unsignedBigInteger('pelanggan_id');
            $table->integer('jumlah_keluar');
            $table->integer('harga');
            $table->integer('harga_total');
            $table->timestamps();

            $table->foreign('apotek_id')->references('id')->on('apoteks');
            $table->foreign('pelanggan_id')->references('id')->on('pelanggans');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tkeluars');
    }
};

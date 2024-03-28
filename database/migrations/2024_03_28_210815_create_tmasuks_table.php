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
        Schema::create('tmasuks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('apotek_id');
            $table->unsignedBigInteger('pemasok_id');
            $table->integer('jumlah_masuk');
            $table->integer('harga');
            $table->integer('harga_total');
            $table->timestamps();

            $table->foreign('apotek_id')->references('id')->on('apoteks');
            $table->foreign('pemasok_id')->references('id')->on('pemasoks');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tmasuks');
    }
};

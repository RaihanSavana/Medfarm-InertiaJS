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
        Schema::create('apoteks', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('nama_obat');
            $table->unsignedBigInteger('jenis_obat_id');
            $table->integer('stok_obat');
            $table->integer('harga');
            $table->timestamps();

            $table->foreign('jenis_obat_id')->references('id')->on('jenis_obats');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apoteks');
    }
};

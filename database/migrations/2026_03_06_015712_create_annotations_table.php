<?php

use App\Models\Document;
use App\Models\OcrBlock;
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
        Schema::create('annotations', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Document::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(OcrBlock::class)->constrained()->onDelete('cascade');
            $table->string('label');
            $table->text('value')->nullable();

            $table->float('x')->nullable();
            $table->float('y')->nullable();
            $table->float('width')->nullable();
            $table->float('height')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('annotations');
    }
};

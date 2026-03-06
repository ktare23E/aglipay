<?php

use App\Models\Document;
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
        Schema::create('ocr_blocks', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Document::class)->constrained()->onDelete('cascade');

            $table->text('text')->nullable();

            $table->float('x');
            $table->float('y');
            $table->float('width');
            $table->float('height');

            $table->decimal('confidence',5,2)->nullable();

            $table->integer('page')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ocr_blocks');
    }
};

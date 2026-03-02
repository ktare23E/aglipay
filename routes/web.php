<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DocumentTypeController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\ScanDocuments;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {

    $user = User::all();
    // return $user;

    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
        'user' => $user
    ]);
})->name('home');


Route::get('/testing',function(){
    $test = 'This is testing from laravel and react';

return Inertia::render('testing',[
        'test' => $test
    ]);
});


Route::middleware('auth')->group(function(){
    Route::middleware(['checkUserType:Admin'])->group(function(){
        Route::get('/dashboard',[DashboardController::class,'admin'])->name('dashboard');

        Route::get('/members',[UserController::class,'index'])->name('members');
        Route::get('/create_user',[UserController::class,'create'])->name('create_user');
        Route::post('/store_member',[UserController::class,'store'])->name('store_member');
        Route::get('/edit_user/{user}',[UserController::class,'edit'])->name('edit_user');
        Route::post('/update_member',[UserController::class,'update'])->name('update_member');

        Route::get('/view_user/{user}',[DashboardController::class,'admin'])->name('view_user');

        Route::get('/documents',[DocumentTypeController::class,'index'])->name('documents');
        Route::get('/create_document_type',[DocumentTypeController::class,'create'])->name('create_document_type');
        Route::post('/store_document_type',[DocumentTypeController::class,'store'])->name('store_document_type');
        Route::get('/edit_document_type/{document_type}',[DocumentTypeController::class,'edit'])->name('edit_document_type');
        Route::post('/update_document_type',[DocumentTypeController::class,'update'])->name('update_document_type');

        Route::get('/scan',[ScanDocuments::class,'index'])->name('scan');

    });
});






Route::post('/submit',[FormController::class,'store'])->name('submit');


require __DIR__.'/settings.php';

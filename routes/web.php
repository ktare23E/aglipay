<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FormController;
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

Route::get('/dashboard',[DashboardController::class,'admin'])->name('dashboard');

Route::get('/documents',function(){
    return Inertia::render('admin/documents/index');
})->name('documents');


Route::post('/submit',[FormController::class,'store'])->name('submit');


require __DIR__.'/settings.php';

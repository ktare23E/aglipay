<?php

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

Route::post('/submit',[FormController::class,'store'])->name('submit');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';

<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FormController;
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

Route::get('/dashboard',[DashboardController::class,'admin'])->name('dashboard');


Route::get('/create_user',[UserController::class,'create'])->name('create_user');
Route::post('/store_member',[UserController::class,'store'])->name('store_member');
Route::get('/edit_user/{user}',[UserController::class,'edit'])->name('edit_user');
Route::post('/update_member',[UserController::class,'update'])->name('update_member');

Route::get('/view_user/{user}',[DashboardController::class,'admin'])->name('view_user');

Route::get('/documents',function(){
    $users = User::all();

    return Inertia::render('admin/documents/index',[
        'users' => $users
    ]);
})->name('documents');


Route::post('/submit',[FormController::class,'store'])->name('submit');


require __DIR__.'/settings.php';

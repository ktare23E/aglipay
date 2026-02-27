<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function edit(User $user){
        return $user;
    }

    public function create(){
        return Inertia::render('admin/members/create');
    }
}

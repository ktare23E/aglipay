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

    public function store(Request $request){
        $data = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        User::create($data);
    }
}

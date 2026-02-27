<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        
        return Inertia::render('admin/members/index',[
            'users' => $users
        ]);
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

    public function edit(User $user){
        return Inertia::render('admin/members/edit',[
            'user' => $user
        ]);
    }


    public function update(Request $request){
        $data = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
        ]);

        User::find($request->id)->update($data);
    }
}

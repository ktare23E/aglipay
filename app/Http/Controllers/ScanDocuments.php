<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ScanDocuments extends Controller
{
    public function index(){
        
        return Inertia::render('admin/scan/index');
    }
}

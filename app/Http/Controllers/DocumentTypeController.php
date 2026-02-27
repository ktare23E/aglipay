<?php

namespace App\Http\Controllers;

use App\Models\DocumentType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentTypeController extends Controller
{
    public function index(){
        $documentTypes = DocumentType::all();

        return Inertia::render('admin/documents/index',[
            'documentTypes' => $documentTypes
        ]);
    }

    public function create(){
        return Inertia::render('admin/documents/create');
    }
}

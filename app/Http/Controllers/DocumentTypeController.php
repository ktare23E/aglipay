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

    public function store(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'status' => 'required',
        ]);

        DocumentType::create($data);
    }

    public function edit(DocumentType $document_type){

        return Inertia::render('admin/documents/edit',[
            'document_type' => $document_type
        ]);
    }

    public function update(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'status' => 'required',
        ]);

        DocumentType::find($request->id)->update($data);

    }
}

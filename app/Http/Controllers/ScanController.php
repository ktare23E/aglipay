<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Cloud\Vision\V1\Client\ImageAnnotatorClient;

class ScanController extends Controller
{
    public function scan(Request $request)
    {
        $request->validate([
            'file' => 'required|image|max:10000'
        ]);

        $file = $request->file('file');

        $imageContent = file_get_contents($file->getRealPath());

        $imageAnnotator = new ImageAnnotatorClient([
            'credentials' => storage_path('app/google/vision.json')
        ]);

        $response = $imageAnnotator->textDetection($imageContent);
        $texts = $response->getTextAnnotations();

        $result = [];

        foreach ($texts as $index => $text) {

            if ($index === 0) {
                continue; // skip full text block
            }

            $vertices = $text->getBoundingPoly()->getVertices();

            $result[] = [
                'text' => $text->getDescription(),
                'x' => $vertices[0]->getX(),
                'y' => $vertices[0]->getY(),
            ];
        }

        $imageAnnotator->close();

        return response()->json([
            'text' => $texts[0]->getDescription() ?? '',
            'blocks' => $result
        ]);
    }
}
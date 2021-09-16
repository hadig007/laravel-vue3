<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;
class AdminController extends Controller
{
    public function addTag(Request $request){
         $data = Tag::create([
            'tagName' => $request->tagName
        ]);
        // dd($data);
        return $data;
    }
    public function getTag(){
        $data = Tag::all();
        // dd($data)->json();
        return $data;
    }
}

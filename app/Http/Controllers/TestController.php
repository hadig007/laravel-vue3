<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function createTag(Request $request){
        return 'its working';
    }
}

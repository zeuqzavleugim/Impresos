<?php

namespace App\Http\Controllers;

use App\Mail\ContactMailable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'city' => 'required',
            'phone' => 'required',
            'asunto' => 'required',
            'message' => 'required',
            'checked' => 'required'
        ]);
        
        Mail::to('contacto@magicpop.com.mx')->cc('willie@magicpop.mx')->send(new ContactMailable($request->all()));

        return;
        // return response()->json(['message' => 'Email sent successfully!']);
    }
}

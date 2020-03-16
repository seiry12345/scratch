<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class CustomerController extends Controller
{

    public function editPassword(Request $request)
    {
        $user = Auth::user();

        $data = $this->validate($request, [
            'old_password' => 'required',
            'new_password' => 'required|min:8',
        ]);

        if (Hash::check($request->old_password, $user->password)) {
            $user->password = Hash::make(Input::get('new_password'));
            $user->save();
        }

        return response()->json($data);
    }

}

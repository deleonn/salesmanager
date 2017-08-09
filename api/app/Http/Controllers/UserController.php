<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class UserController extends Controller
{
    public function login(Request $request)
    {
        // if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
        //   $user = User::where('email', $request->email)->first();
        //   return response()->json($user);
        // }

        $credentials = $request->only('email', 'password');
        try {
          if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Invalid credentials.'], 401);
          }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token.'], 500);
        }
        $user = User::where('email', $request->email)->first();
        return response()->json(['token' => $token, 'user' => $user], 200);
    }

    public function index()
    {

    }

    public function store(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'email' => 'required|unique:users|email',
        'username' => 'required|unique:users|string',
        'name' => 'required|string',
        'password' => 'required|string',
      ]);

      if ($validator->fails()) {
        return response()->json($validator->messages(), 422);
      }

      $user = new User([
        'name' => $request->name,
        'username' => $request->username,
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'profile_picture' => 'avatar.png'
      ]);
      $user->save();

      return response()->json([
        'message' => 'User successfully created'
      ], 201);



    }
}

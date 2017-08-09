<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
use App\Order;

class OrdersController extends Controller
{

    public function __construct()
    {
      $this->middleware('jwt.auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::all();
        $response['data'] = $orders;
        return Response::json($response, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function markAsComplete(Request $request)
    {
      $id = $request->id;
      $order = Order::where('id', $id)
          ->update(['status' => 1]);

      $response['data'] = $order;
      return Response::json($response, 200);
    }

    public function markAsDelivered(Request $request)
    {
      $id = $request->id;
      $order = Order::where('id', $id)
          ->update(['status' => 2]);

      $response['data'] = $order;
      return Response::json($response, 200);
    }
}

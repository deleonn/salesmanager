<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
use App\Order;

class OverviewController extends Controller
{
    public function getFunds()
    {
      $funds = Order::where('status', 2)->sum('total_cost');
      $response['data'] = $funds;
      return Response::json($response, 200);
    }

    public function getCompleteOrders()
    {
      $complete = Order::where('status', 2)->count();
      $response['data'] = $complete;
      return Response::json($response, 200);
    }
    
    public function getIncompleteOrders()
    {
      $incomplete = Order::where('status', 0)->orWhere('status', 1)->count();
      $response['data'] = $incomplete;
      return Response::json($response, 200);
    }
}

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
}

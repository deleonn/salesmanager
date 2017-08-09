<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'UserController@login');
Route::resource('users', 'UserController');
Route::resource('orders', 'OrdersController');
Route::post('orders/markAsComplete', 'OrdersController@markAsComplete');
Route::post('orders/markAsDelivered', 'OrdersController@markAsDelivered');
Route::get('overview/get_funds', 'OverviewController@getFunds');
Route::get('overview/get_incomplete_orders', 'OverviewController@getIncompleteOrders');
Route::get('overview/get_complete_orders', 'OverviewController@getCompleteOrders');

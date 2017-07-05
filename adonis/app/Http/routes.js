'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome');


Route.group('api', function(){
  Route.resource('/users', 'UserController')
  Route.resource('/orders', 'OrderController')
  Route.get('/overview/get_funds', 'OverviewController.getFunds')
  Route.get('/overview/get_complete_orders', 'OverviewController.getCompleteOrders')
  Route.get('/overview/get_incomplete_orders', 'OverviewController.getIncompleteOrders')
}).prefix('api')

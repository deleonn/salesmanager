'use strict'

const Order = use('App/Model/Order')

class OverviewController {

  * getFunds(request, response) {
    const funds = yield Order.query().where('status', 2).sum('total_cost as total')
    if (funds[0].total != null) {
      yield response.json({data: funds})
    } else {
      response.json({data: 0})
    }
  }

  * getCompleteOrders(request, response) {
    const orders = yield Order.query().where('status', 2).count("* as total")
    yield response.json({data: orders})
  }

  * getIncompleteOrders(request, response) {
    const orders = yield Order.query().where('status', 0).orWhere('status', 1).count("* as total")
    yield response.json({data: orders})
  }
}

module.exports = OverviewController

'use strict'

const Order = use('App/Model/Order')

class OrderController {

  * index (request, response) {
    const order = yield Order.all()
    yield response.json({data: order})
  }

}

module.exports = OrderController

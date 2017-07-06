'use strict'

const Order = use('App/Model/Order')

class OrderController {

  * index (request, response) {
    const order = yield Order.all()
    if(order) {
      yield response.json({data: order})
      return
    }

    yield response.send('Sorry, cannot find the selected found')

  }

  * store (request, response) {
    const customer = request.input('customer')
    const quantity = request.input('quantity')
    const total_cost = request.input('total_cost')
    const total_grams = request.input('total_grams')
    const delivery = request.input('delivery')

    const order = new Order()
    order.customer_name = customer
    order.quantity = quantity
    order.paid = 0
    order.total_cost = total_cost
    order.total_grams = total_grams
    order.delivery = delivery
    order.status = 0
    yield order.save()

    yield response.json({data: order})

  }

  * markAsComplete(request, response) {
    const id = request.input('id')
    const order = yield Order.findBy('id', id)
    order.status = 1;
    yield order.save()

    yield response.json({data: order})
  }

  * markAsDelivered(request, response) {
    const id = request.input('id')
    const order = yield Order.findBy('id', id)
    order.status = 2;
    yield order.save()

    yield response.json(order)
  }

}

module.exports = OrderController

'use strict'

const Order = use('App/Model/Order')
const Cutter = use('App/Model/Cutter')

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
    const order = new Order()
    const items = request.input('items')
    var time = 0
    var grams = 0
    // Data from number and specs of cutters
    const date = request.input('order.date')
    const hour = request.input('order.hour')
    const minutes = request.input('order.minutes')

    order.customer_name = request.input('order.customer_name')
    order.paid = 0
    order.status = 0
    order.quantity = items.length // Quantity of cutters
    // order.total_cost = time // Sum of cutters cost
    // order.total_grams = grams // Sum of cutters grams
    // order.delivery = request.input('order.delivery') // Delivery date from separate date/h:mm field


    yield order.save()

    for (var i = 0; i < items.length; i++) {
      const cutter = yield Cutter.create({
        order_id: order.id,
        name: items[i].name,
        x: items[i].x,
        y: items[i].y,
        z: items[i].z,
        time: items[i].time,
        grams: items[i].grams,
        isModeled: 0,
        isPrinted: 0,
      })
    }

    const updateCost = yield Cutter.query().where('order_id', order.id).sum('time as cost')
    const updateGrams = yield Cutter.query().where('order_id', order.id).sum('grams as grams')

    const newOrder = yield Order.findBy('id', order.id)
    newOrder.total_cost = updateCost[0].cost
    newOrder.total_grams = updateGrams[0].grams
    yield newOrder.save()
    // cutter.order_id
    // cutter.isModeled
    // cutter.isPrinted


    yield response.json({data: newOrder})

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

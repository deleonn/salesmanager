'use strict'

const Schema = use('Schema')

class OrdersTableSchema extends Schema {

  up () {
    this.createIfNotExists('orders', (table) => {
      table.increments('id')
      table.string('customer_name')
      table.integer('quantity')
      table.double('paid')
      table.double('total_cost')
      table.double('total_grams')
      table.dateTime('delivery')
      table.boolean('status')
    })
  }

  down () {
    this.table('orders', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = OrdersTableSchema

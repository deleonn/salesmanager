'use strict'

const Schema = use('Schema')

class CuttersTableSchema extends Schema {

  up () {
    this.createIfNotExists('cutters', (table) => {
      table.increments('id')
      table.integer('order_id').unsigned()
      table.foreign('order_id').references('orders.id')
      table.string('name')
      table.decimal('x')
      table.decimal('y')
      table.decimal('z')
      table.decimal('grams')
      table.decimal('time')
      table.boolean('isModeled')
      table.boolean('isPrinted')
      table.timestamps()
    })
  }

  down () {
    this.table('cutters', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CuttersTableSchema

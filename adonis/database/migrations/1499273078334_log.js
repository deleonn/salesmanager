'use strict'

const Schema = use('Schema')

class LogTableSchema extends Schema {

  up () {
    this.createIfNotExists('log', (table) => {
      table.string('name')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.string('ip')
      table.string('device')
      table.string('OS')
      table.string('browser')
      table.dateTime('date')
    })
  }

  down () {
    this.table('log', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = LogTableSchema

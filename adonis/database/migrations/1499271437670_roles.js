'use strict'

const Schema = use('Schema')

class RolesTableSchema extends Schema {

  up () {
    this.createIfNotExists('roles', (table) => {
      table.increments('id')
      table.string('name')
    })
  }

  down () {
    this.table('roles', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = RolesTableSchema

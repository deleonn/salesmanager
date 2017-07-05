'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.createIfNotExists('users', (table) => {
      table.increments('id')
      table.string('name')
      table.string('username').unique()
      table.string('email').unique()
      table.string('password', 60)
      table.string('profile_picture')
      table.integer('role_id').unsigned()
      table.foreign('role_id').references('roles.id')
      table.timestamps()
      table.softDeletes()

    })
  }

  down () {
    this.table('users', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = UsersTableSchema

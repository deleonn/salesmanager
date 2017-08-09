'use strict'

const Schema = use('Schema')

class CreateTokensTableTableSchema extends Schema {

  up () {
    this.table('create_tokens_table', (table) => {
      // alter create_tokens_table table
    })
  }

  down () {
    this.table('create_tokens_table', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CreateTokensTableTableSchema

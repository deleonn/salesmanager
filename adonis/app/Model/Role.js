'use strict'

const Lucid = use('Lucid')

class Role extends Lucid {

  user() {
    return this.belongsTo('App/Model/User')
  }

}

module.exports = Role

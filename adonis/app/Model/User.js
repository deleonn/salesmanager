'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  role() {
    return this.hasOne('App/Model/Role')
  }

}

module.exports = User

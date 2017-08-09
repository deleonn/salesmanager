'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static boot () {
    super.boot()
    this.addHook('beforeCreate', 'User.encryptPassword')
  }

  static get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required',
    }
  }

  role() {
    return this.hasOne('App/Model/Role')
  }

}

module.exports = User

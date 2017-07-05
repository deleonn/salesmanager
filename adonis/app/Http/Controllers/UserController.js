'use strict'

const User = use('App/Model/User')

class UserController {

  * index (request, response) {
    const users = yield User.all()
    yield response.json({data: users})
  }

}

module.exports = UserController

'use strict'

const User = use('App/Model/User')
const Validator = use('Validator')

class UserController {

  * login (request, response) {
    const email = request.input('email')
    const password = request.input('password')
    const login = yield request.auth.attempt(email, password)

   if (login) {
     response.send('Logged In Successfully')
     return
   }

   response.unauthorized('Invalid credentails')
  }

  * index (request, response) {
    const users = yield User.all()
    yield response.json({data: users})
  }

  * store(request, response) {
    const user = new User()
    const userData = request.all()
    const validation = yield Validator.validateAll(userData, User.rules)

    user.name = request.input('name')
    user.username = request.input('username')
    user.email  = request.input('email')
    user.password  = request.input('password')
    user.profile_picture  = 'path/to/picture'
    user.role_id = 2

     if (validation.fails()) {
       response.json({data: validation.messages()})
       return
     }

     try {
       yield user.save() // SQL Insert
       yield response.json({data: user, message: 'Success'})
     } catch (e) {
       yield response.status(400).json({message: 'Error.'})
     }
  }

}

module.exports = UserController

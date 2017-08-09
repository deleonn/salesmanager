'use strict'

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Factory = use('Factory')
const Database = use('Database')

class DatabaseSeeder {

  * run () {
    yield Database
    .table('roles')
    .insert({name: 'Admin', id: 1})

    yield Database
    .table('roles')
    .insert({name: 'User', id: 2})

    yield Factory.model('App/Model/User').create(5)

  }

}

module.exports = DatabaseSeeder

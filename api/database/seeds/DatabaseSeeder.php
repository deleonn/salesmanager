<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('roles')->insert([
          [
              'id' => '1',
              'name' => 'Admin'
          ],
          [
              'id' => '2',
              'name' => 'User'
          ],
          [
              'id' => '3',
              'name' => 'Guest'
          ]
        ]);

        factory(App\User::class, 10)
          ->create();

    }
}

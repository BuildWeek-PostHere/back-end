// need to encrypt the passwors
const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // need to hash the password
      const pass = bcrypt.hashSync('pass', 10)

      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Ale',
          password: pass
        },
        {
          id: 2,
          username: 'Devon',
          password: pass
        },
        {
          id: 3,
          username: 'Lexi',
          password: pass
        },
        {
          id: 4,
          username: 'Tomato',
          password: pass
        },
        {
          id: 5,
          username: 'Lalaland',
          password: pass
        },
      ]);
    });
};

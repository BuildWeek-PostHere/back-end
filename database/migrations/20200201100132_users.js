
exports.up = function(knex) {
    // schema for users
    return knex.schema.createTable('users', tbl => {
        // id
        tbl.increments();
    
        // username
        tbl
          .string('username', 100)
          .notNullable()
          .unique();
  
        // password  
        tbl
          .string('password', 100)
          .notNullable();
      })
};

exports.down = function(knex) {
    // rollback
    return knex.schema.dropTableIfExists('users');
};

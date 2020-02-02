
exports.up = function(knex) {
    // schema for users
    return knex.schema.createTable('posts', tbl =>{
        // id
        tbl.increments();
        
        // title
        tbl.string('title', 300).notNullable();

        // suggested best place
        tbl.string('best_place', 200);

        // body of the post
        tbl.text('post_body').notNullable();

        // connection to user
        tbl.integer('user_id').unsigned().references('id').inTable('users')
          .onDelete(' CASCADE').onUpdate('CASCADE');
      })
};

exports.down = function(knex) {
    // rollback
    return knex.schema.dropTableIfExists('posts')
};

exports.up = function(knex) {
    return knex.schema.createTable('exercises', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.string('region').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('exercises')
  };
  
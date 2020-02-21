exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("description", 1024);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo("false");
    })
    .createTable("resource", tbl => {
      tbl.increments("resource_id");
      tbl.string("name", 255).notNullable();
      tbl.string("description", 1024);
    })
    .createTable("task", tbl => {
      tbl.increments("task_id");
      tbl.string("description", 1024).notNullable();
      tbl.string("notes", 200);
      tbl
        .boolean("completed_task")
        .notNullable()
        .defaultTo("false");
    });
};

exports.down = function(knex) {};

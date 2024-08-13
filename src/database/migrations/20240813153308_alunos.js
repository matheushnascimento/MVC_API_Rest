/* eslint-disable no-undef */
exports.up = (knex) =>
  knex.schema.createTable("alunos", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("last_name").notNull();
    table.text("email").notNull();
    table.bigInteger("age").notNull();
    table.float("weight").notNull();
    table.float("height").notNull();
    table.timestamp("created_at").notNull().default(knex.fn.now());
    table.timestamp("updated_at").notNull().default(knex.fn.now());
  });

// eslint-disable-next-line no-unused-vars
exports.down = (knex) => knex.schema.Table("alunos", (table) => {});

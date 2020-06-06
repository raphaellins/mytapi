import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('priority').notNullable();
    table.string('start_date').notNullable();
    table.string('end_date').notNullable();
    table.string('type').notNullable();
    table.string('project').notNullable();
    table.string('description').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('activities');
}

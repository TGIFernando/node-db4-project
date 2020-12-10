
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('name', 128).notNullable()
      tbl.string('description', 128)
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id')
    tbl.string('name', 128).notNullable()
  })
  .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.string('text', 128).notNullable()
      tbl.integer('step_number').notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id').inTable('recipes')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
  })
  .createTable('step_ingredients', tbl => {
      tbl.increments()
      tbl.string('quantity', 128)
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id').inTable('steps')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id').inTable('ingredients')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {text: 'heat up water', step_number: 1, recipe_id: 1},
        {text: 'cut veggies', step_number: 2, recipe_id: 1},
        {text: 'boil everything', step_number: 3, recipe_id: 1}
      ]);
    });
};

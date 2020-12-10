
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'water'},
        {name: 'carrots'},
        {name: 'cow'},
        {name: 'tomatoes'},
        {name: 'potatoes'}
      ]);
    });
};

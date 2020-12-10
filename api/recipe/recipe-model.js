const db = require('../../data/db-config')

module.exports = {
    get,
}

function get(){
    return db('step_ingredients as si')
        .join('steps as s', 's.step_id', 'si.step_id')
        .join('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .join('recipes as r', 'r.recipe_id', 's.recipe_id')
        .select('r.name as recipe' ,'si.id', 's.step_number', 's.text', 'si.quantity', 'i.name')
        .orderBy('s.step_number')
}
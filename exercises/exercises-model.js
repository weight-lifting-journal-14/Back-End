const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findById,
    edit,
    remove
}

function find() {
    return db('exercises')
    .select('*')
}
function findById(id) {
    return db('exercises')
    .select('name', 'region')
    .where({id})
    .first();
}

async function add(exercise){
    return await db('exercises').insert(exercise)
 };

 function edit(changes, id) {
    return  db('exercises')
            .where({id})
            .update(changes, 'id')
}
function remove(id) {
	return db('users')
	  .where('id', Number(id))
	  .del();
  }

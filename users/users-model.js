const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove
};

function find() {
	return db('users').select('id', 'username');
}

function findBy(filter) {
	return db('users').where(filter);
}
function add(user) {
	return db("users")
	  .insert(user, "id")
	  .then(ids => {
		const [id] = ids;
		return findById(id);
	  });
  }
  
  function findById(id) {
	return db("users")
	  .select("id", "username")
	  .where({ id })
	  .first();
  }
// async function add(user) {
// 	const [ id ] = await db('users').insert(user);

// 	return findById(id);
// }

// function add(user) {
//     return db('users')
//         .insert(user, 'id')
//         .then(([id]) => getById(id));
// };

// function findById(id) {
// 	return db('users').where({ id }).first();
// }
function remove(id) {
	return db('users')
	  .where('id', Number(id))
	  .del();
  }
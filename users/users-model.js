const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findByUsername,
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

function findByUsername(id) {
return db("users")
	.select("id", "username")
	.where({ id })
	.first();
}

//   function findById(id) {
// 	return db("users")
// 	  .select("id", "username")
// 	  .where({ id })
// 	  .first();
//   }

// Get an individual user by ID
async function findById(id) {
    let workouts = [];
    
    // Retrieves the user by their ID
    const user = await db('users')
        .where({ id })
        .select('id', 'username')
        .first();

        // Returns all workouts specific to that user if they exist
if (user) {
    workouts = await db('workouts as w')
        .leftJoin('workouts_exercises as we', 'we.workout_id', 'w.id')
        .leftJoin('exercises as e', 'we.exercise_id', 'e.id')
        .select('w.id', 'w.name')
        .where({ user_id: id })
        .groupBy('w.id')
        .count('e.id as exercises')

            return await {
                ...user,
                workouts: workouts
            };
        }
};


function remove(id) {
	return db('users')
	  .where('id', Number(id))
	  .del();
  }
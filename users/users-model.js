const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findByUsername,
	addWorkout,
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
  function addWorkout(workout){
    return db('workouts')
            .insert(workout, 'id');
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

// async function getByUsername(username) {
//     let workouts = [];

//     // Retrieves the user by their username
//     const user = await db('users')
//         .where({ username })
//         .select('id', 'username', 'email', 'created_at', 'updated_at')
//         .first();

//     // Returns all workouts specific to that user if they exist
//     if (user) {
//         workouts = await db('workouts as w')
//             .leftJoin('workouts_exercises as we', 'we.workout_id', 'w.id')
//             .leftJoin('exercises as e', 'we.exercise_id', 'e.id')
//             .groupBy('w.name')
//             .select('w.name as workout_name')
//             .count('e.id as exercises')
//             .where({ user_id: user.id });
    
//         return await {
//             ...user,
//             workouts: workouts
//         };
//     }
// };
// async function findById(id) {
// const user = await Users.findById(user_id);
// const workouts = await Workouts.findBy({user_id: user_id}) // return an array
// const response = { user, workouts };
// res.status(200).json(response);
// }






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
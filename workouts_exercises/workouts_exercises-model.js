const db = require('../data/dbConfig');

module.exports = {
    add,
	find
};

function find() {
    return db('workouts_exercises')
        .orderBy('id')

}

async function add(workout_exercise){
    return await db('workouts_exercises').insert(workout_exercise)
 };
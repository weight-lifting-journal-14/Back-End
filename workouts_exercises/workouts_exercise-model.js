const db = require('../data/dbConfig');

module.exports = {
	find
};

function find() {
    return db('workouts_exercises')
        .orderBy('id')

}
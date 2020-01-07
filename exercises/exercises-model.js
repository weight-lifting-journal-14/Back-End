const db = require('../data/dbConfig');

module.exports = {
    find,
    findById
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
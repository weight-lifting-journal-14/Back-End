
exports.seed = function(knex) {
	// Deletes ALL existing entries
	// Inserts seed entries
	return knex('users').insert([
		{ username: 'maddy', password: 'maddy'},
		{ username: 'jade', password: 'jade' },
		{ username: 'lilly', password: 'lilly' },
	]);
};

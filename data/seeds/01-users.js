
exports.seed = function(knex) {
	// Deletes ALL existing entries
	// Inserts seed entries
	return knex('users').insert([
		{ username: 'maddy', password: 'maddy', department: 'friends' },
		{ username: 'jade', password: 'jade', department: 'friends' },
		{ username: 'lilly', password: 'lilly', department: 'betterfriend' },
	]);
};

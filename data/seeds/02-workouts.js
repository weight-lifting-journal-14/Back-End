
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {name: 'workout name', date: null, user_id: 1},
        {name: 'leg Workout', date: null, user_id: 1},
        {name: 'arm Workout', date: null, user_id: 1},
        {name: 'workout name', date: null, user_id: 2},
        {name: 'leg Workout', date: null, user_id: 2},
        {name: 'arm Workout', date: null, user_id: 2},
        {name: 'workout name', date: null, user_id: 3},
        {name: 'leg Workout', date: null, user_id: 3},
        {name: 'arm Workout', date: null, user_id: 3},
      ]);
    });
};

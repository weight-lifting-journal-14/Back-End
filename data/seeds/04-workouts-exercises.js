
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts_exercises').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('workouts_exercises').insert([
        { workout_id: 1, exercise_id: 1, reps: 10, sets: 10 },
        { workout_id: 1, exercise_id: 2, reps: 10, sets: 10 },
        { workout_id: 1, exercise_id: 3, reps: 10, sets: 10 },
        { workout_id: 2, exercise_id: 1, reps: 10, sets: 10 },
        { workout_id: 2, exercise_id: 2, reps: 10, sets: 10 },
        { workout_id: 2, exercise_id: 3, reps: 10, sets: 10 },
        { workout_id: 3, exercise_id: 1, reps: 10, sets: 10 },
        { workout_id: 3, exercise_id: 2, reps: 10, sets: 10 },
        { workout_id: 3, exercise_id: 3, reps: 10, sets: 10 },
      ]);
    });
};

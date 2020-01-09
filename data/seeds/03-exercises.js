
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('exercises').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        { name: "Squats", region: 'Quads'},
        { name: "Curls", region: 'Biceps'},
        { name: "Pushups", region: 'Chest'},
        { name: "Lunges", region: 'Hamstrings'},
        { name: "Pull Ups", region: 'Back'}
      ]);
    });
};

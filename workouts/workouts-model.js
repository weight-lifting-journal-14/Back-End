const db = require('../data/dbConfig');

module.exports = {
    // addExercise,
    add,
    find,
    findById,
    edit
};

function find(){
    return db('workouts')
        .orderBy('id')
};

function findById(id) {
    return db('workouts')
      .where({ id })
      .first();
  }

function add(workout){
   return db('workouts').insert(workout)
};
function edit(changes, id) {
    return  db('workouts')
            .where({id})
            .update(changes, 'id')
}


// async function addExercise(workoutData, workout_id) {
//     const exercise = await db('exercises')
//         .where({name: workoutData.name})
//         .first();

//     if (exercise) {
//         await db('workouts_exercises')
//             .insert({
//                 reps: workoutData.reps,
//                 sets: workoutData.sets,
//                 workout_id: workout_id,
//                 exercise_id: exercise.id
//             })
//             .returning('id');
//     } else {
//         cosnt [id] = await db('exercises')
//             .insert({
//                 name: workoutData.name,
//                 region: workoutData.region
//             })
//             .returning('id');
        
//         await db('workouts_exercises')
//             .insert({
//                 reps: workoutData.reps,
//                 sets: workoutData.sets,
//                 workout_id: workout_id,
//                 exercise_id: id
//             })
//             returning('id');
//     };
//     return await findById(workout_id)
// };

// async function findById(workout_id){
//     const workout = await db('workouts as w')
//         .select(
//             'w.id as workout_id',
//             'w.name as workout_name',
//         )
//         .where({ id: workout_id})
//         .first();

//     if  (workout) {
//         const exercises = await db('workouts_exercises as we')
//             .join('workouts as w', 'we.workout_id', 'w.id')
//             .join('exercises as e', 'we.exercise_id', 'e.id')
//             .select(
//                 'we.id as user_exercise_id',
//                 'e.id as exercise_id',
//                 'e.name as exercise_name',
//                 'e.region',
//                 'we.sets',
//                 'we.reps'
//             )
//             .where({ workout_id })

//         return {
//             ...workout,
//             exercises: exercises
//         }
//     }
// }

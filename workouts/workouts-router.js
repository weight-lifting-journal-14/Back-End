const router = require('express').Router();
const Workouts = require('./workouts-model');
const restricted = require('../auth/restricted-mid.js');
const validExercise = require('../middleware/validExercise')

router.get('/',restricted, (req, res) => {
    Workouts.find()
        .then(workouts => {
            res.status(200).json(workouts)
        })
        .catch(err => {
            res.status(500).json({ error: 'the server failed to retrieve all workouts'})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Workouts.findById(id)
    .then(workout => {
        if (workout) {
            res.status(200).json(workout)
        } else {
            res.status(404).json({message: `Sooo yea the id of ${id} isnt in the database sorry mate try again`})
        }
    })
    .catch(err => {
        res.status(500).json({ error: "The server failed to retrieve the workout by id"})
    })
})

router.post('/', (req, res) => {
    const workouts = req.body
    console.log(workouts)
    Workouts.add(workouts)

        .then(workout => {
            res.status(200).json(workout)
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to add workout'})
        })
})

// router.post('/:id/exercises', (req, res) => {
//     const workoutData = req.body;
//     const {id} = req.params;

//     const exerciseValidation = validExercise(workoutData);
//     console.log(exerciseValidation)
//     if(exerciseValidation.isSuccessful) {
//         Workouts.addExercise(workoutData, id)
//             .then(workout => {
//                 console.log(workout)
//                 res.status(201).json(workout);
                
//             })
//             .catch(err => {
//                 res.status(500).json({ error: 'server failed to add the exercise to the workout'})
//             });
//     } else {
        
       
//         res.status(400).json({
//             message: 'The exercise information isnt valid check the errors list for more details',
//             errors: exerciseValidation.errors
//         })
//     }


// })
module.exports = router;
const router = require('express').Router();
const Workouts_exercises = require('./workouts_exercise-model');
const restricted = require('../auth/restricted-mid.js');

router.get('/',restricted, (req, res) => {
    Workouts_exercises.find()
        .then(Workouts_exercises => {
            res.status(200).json(Workouts_exercises)
        })
        .catch(err => {
            res.status(500).json({ error: 'the server failed to retrieve all workouts_exercises'})
        })
})

module.exports = router;
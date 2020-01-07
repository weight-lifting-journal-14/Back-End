const router = require('express').Router();
const Workouts_exercises = require('./workouts_exercise-model');
const restricted = require('../auth/restricted-mid.js');

router.get('/',restricted, (req, res) => {
    Workouts_exercises.find()
        .then(Workouts_exercises => {
            res.status(200).json(Workouts_exercises)
        })
        .catch(err => {
            res.status(500).json({ error: 'we the server for the client failed to retrieve workouts exercises'})
        })
})

module.exports = router;
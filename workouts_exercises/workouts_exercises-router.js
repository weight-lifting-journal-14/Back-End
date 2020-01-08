const router = require('express').Router();
const Workouts_exercises = require('./workouts_exercises-model');
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

router.post('/', (req, res) => {
    const workouts_exercises = req.body
    console.log(workouts_exercises)
    Workouts_exercises.add(workouts_exercises)
        .then(workouts_exercise => {
            res.status(200).json(workouts_exercise)
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to add exercise to workout'})
        })
})

module.exports = router;
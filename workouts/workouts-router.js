const router = require('express').Router();
const Workouts = require('./workouts-model');
const restricted = require('../auth/restricted-mid.js');

router.get('/',restricted, (req, res) => {
    Workouts.find()
        .then(workouts => {
            res.status(200).json(workouts)
        })
        .catch(err => {
            res.status(500).json({ error: 'the server failed to retrieve all workouts'})
        })
})

module.exports = router;
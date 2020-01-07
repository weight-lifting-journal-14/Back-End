const router = require('express').Router();

const Exercises = require('./exercises-model');

router.get('/', (req, res) => {
    Exercises.find()
    .then(exercise => {
        res.status(200).json(exercise)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    Exercises.findById(req.params.id)
    .then(exercise => {
        res.status(200).json(exercise)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;

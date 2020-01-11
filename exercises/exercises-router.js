const router = require('express').Router();
const validExercise = require('../middleware/validExercise')
const Exercises = require('./exercises-model');
const restricted = require('../auth/restricted-mid')

router.get('/', restricted, (req, res) => {
    Exercises.find()
    .then(exercise => {
        res.status(200).json(exercise)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


router.get('/:id', restricted, (req, res) => {
    Exercises.findById(req.params.id)
    .then(exercise => {
        res.status(200).json(exercise)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', restricted, (req, res) => {
    const exercises = req.body
    console.log(exercises)
    Exercises.add(exercises)

        .then(exercise => {
            res.status(200).json(exercise)
        })
        .catch(err => {
            res.status(500).json({ error: 'failed to add exercise'})
        })
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    console.log(changes)
    Exercises.edit(changes, id)
            .then(exercise => {
                res.status(200).json({
                    message: `exercise of id: ${id} was changed`,
                    exercise,
                    changes:changes})
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'the server could not edit the workout'})
            })
});

module.exports = router;

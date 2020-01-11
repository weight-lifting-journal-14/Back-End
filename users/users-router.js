const router = require('express').Router();

const Users = require('./users-model.js');

const restricted = require('../auth/restricted-mid.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(users);
    })
    .catch(err => res.status(500).json({error: "we cant retrieve the users as of right now sorry"}));
});

router.get('/:id', restricted,  (req, res) => {
  const id = req.params.id
  Users.findById(id)
  .then(users => {
    res.json(users);
    console.log(users)
  })
})

router.get('/username', restricted, (req, res) => {
  const username = req.body.username
  console.log(username)
  Users.findByUsername(username)
  .then(users => {
    res.json(users);
    
  })
})


// POST - Add a workout to a user
router.post('/:id/workouts', restricted, (req, res) => {
  const workoutData = req.body;
  const { id } = req.params;

  if (!workoutData.name) {
    console.log(workoutData)
      res.status(400).json({ message: "Please provide a name for this workout." });
  }

  Users.addWorkout({ 
      ...workoutData,
      user_id: id
  })
  .then(work => res.status(201).json(work)) 
  .catch(err => res.status(500).json({ error: "The server failed to add a workout." }));
})

// router.put('/:id', (req, res) => {
//   const {id} = req.params
//   let changes = req.body
//   if(!changes.username) {
//     res.status(422).json({errMessage: "missing the username there buddy"})
//   }
//   if(!changes.password) {
//     res.status(422).json({errMessage: "missing the password there buddy"})
//   }
//   const hash = bcrypt.hashSync(changes.passwork, 8);
//   changes.password = hash
//   Users.update(id,changes)
//   .then(changed => {
//     if(changed) {
//       res.status(200).json({message: "User succesfully updated"})
//     } else {
//       res.status(404).json({message: "could not update user"})
//     }
//   })
// })

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Users.remove(id)
  .then(removed => {
      if(removed) {
          res.status(404).json({message: "user deleted", removed})
      }else{
          res.status(200).json({message: "user not found"})
      }
  })
})


module.exports = router;

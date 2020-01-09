const router = require('express').Router();

const Users = require('./users-model.js');



const restricted = require('../auth/restricted-mid.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  Users.findById(id)
  .then(users => {
    res.json(users);
    console.log(users)
  })
})

router.get('/username', (req, res) => {
  const username = req.body.username
  console.log(username)
  Users.findByUsername(username)
  .then(users => {
    res.json(users);
    
  })
})


// POST - Add a workout to a user
router.post('/:id/workouts', (req, res) => {
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



// // GET - individual user by username
// router.get("/:username", async (req, res) => {
//   const username = req.params.username
//   try { 
//       res.status(200).json(username); 
//       console.log(username)
//   } 
//   catch (err) { 
//       res.status(500).json({ error: "The server failed to retrieve that user." }); 
//   };
// });



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

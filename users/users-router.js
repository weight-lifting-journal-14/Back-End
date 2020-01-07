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

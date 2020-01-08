const Users = require('../users/users-model');

module.exports = async (req, res, next) => {
    const user = await Users.findByUsername(req.body.username);

    if(!user){
        next()
    } else if(user) {
        res.status(400).json({message: 'username already taken sorry'})
    }
}
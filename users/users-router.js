// import expres and create a router
const router = require('express').Router();

// import users model
const Users = require('./users-model.js');

// import restricted middleware
const restricted = require('../auth/restricted-middleware.js');

// end point to get all users
router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users =>{
            res.json(users);
        }) 
        .catch(error => {
            console.log(error);
            res.send(error)
        })
})

// end point to delete user
router.delete("/:id", (req,res) =>{
    // check if we have the id firts
    if(!req.params.id){
       // if no id then return a 404, Not Found and error message
       return res.status(404).json({errorMessage:"User with such id does not exist"})
   }
   Users.remove(req.params.id)
       .then(response =>{
           return res.status(200).json({message : "User has been deleted"})
       })
       .catch(error => {
           console.log(error);
           res.status(500).json("There is an error in the server while trying to delete the user")
       })
})

module.exports = router;
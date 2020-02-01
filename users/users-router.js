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
            res.status(500).json({ message: 'Error getting all users'})
        })
})

// end point to delete user
router.delete("/:id", (req, res) => {
    Users.remove(req.params.id)
      .then(response => {
          // if user was remove return http status code 200 Success, and message
        if (response) {
          res.status(200).json({ message: 'User has been response!' });
        } 
        // if not, then return a http status code 404 Not Found and message
        else {
          res.status(404).json({ message: 'User with such id does not exist!' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'There is an error in the server while trying to delete the user' });
      });
  });
  
// get a user by its specific id
router.get("/:id", (req, res) => {
    Users.findById(req.params.id)
      .then(response => {
        if (response) {
          res.status(200).json(response);
        } 
        else {
          res.status(404).json({ message: 'User with such id does not exist!' });
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Error getting all users!' });
      });
  });

module.exports = router;

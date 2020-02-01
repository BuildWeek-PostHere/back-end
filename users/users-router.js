// import express 
const express = require('express');

// user express to create a router
const router = express.Router();

// import users model
const Users = require('./users-model.js');

// end point to get all users
router.get('/', (req, res) => {
    Users.find()
        .then(users =>{
            res.json(users);
        }) 
        .catch(error => {
            console.log(error);
            res.send(error)
        })
})

module.exports = router;
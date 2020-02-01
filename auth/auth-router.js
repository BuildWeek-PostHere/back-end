// import express
const express = require('express');

// import bcrypt
const bcrypt = require('bcryptjs');

// import json web token
const jwt = require('jsonwebtoken');

// using express to create a router
const router = express.Router();

// import users model
const Users = require('../users/users-model.js');

// distruct validation from users validation
const { userValidation} = require('../users/users-validation.js');

// handles register
router.post('/register', (req, res) =>{
    // assign request body to user
    let user = req.body
    
    // validate before sending anything to ther data base
    const validation = userValidation(user);

    // if user is validated then hash the password for security
    if(validation.isSuccessful === true){
        const hash = bcrypt.hashSync(user.password, 10);

        // set up the password as a hash
        user.password = hash;

        // adding the user using the add method
        Users.add(user)
            .then(saved =>{
                // return  http status code 201 Created and the saved response
                res.status(201).json(saved)
            })
            .catch(error =>{
                console.log(error);
                res.status(500).json(error);
            });
    }
    else{
        // returns http status code 400 Bad request and error message
        res.status(400).json({
            message: "Invalid username or password!",
            errors: validation.errors
        });
    }
});

// export router
module.exports = router;
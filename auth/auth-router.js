// import express
const express = require('express');

// import bcrypt
const bcrypt = require('bcryptjs');

// import json web token
const jwt = require('jsonwebtoken');

// destructuring and importing jwtSecret from secrets
const { jwtSecret } = require('../config/secret.js');


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

// handles login
router.post('/login', (req, res) =>{
    // distructure username and password from the body of the request
    const {username, password} = req.body;

    // find by username
    Users.findBy({ username})
        // get the first one
        .first()
        .then(user =>{
            // password match with data base
            if(user && bcrypt.compareSync(password, user.password)){
                const token = signToken(user.username);
            
              // Upon successfully login return http status code 200 Success and token
              res.status(200).json({
                  message: `Welcome, ${user.username}!`,
                  token,
                  id:user.id
              });
          } 
          else {
            // Upon invalid credentials, return http status code 401 Unauthorized Error
              res.status(401).json({ message: "Invalid Credentials" });
          }
        })
        .catch(error => {
            // in case of an error return http status code 500 Server error
             res.status(500).json(error);
         });

         function signToken(username){
             const payload = {
                 username
             };

            // show other available options in the library's documentation 
             const options = {
                expiresIn: '10d'
             };

             // extract secret to use where needed
             return jwt.sign(payload, jwtSecret, options);
         }
})

// export router
module.exports = router;
// import expres and create a router
const router = require('express').Router();

// import users model
const Post = require('./post-model.js');

// import restricted middleware
const restricted = require('../auth/restricted-middleware.js');

// create new post
router.post('/', (req, res) =>{

    // asign the req body
    const body = req.body

    // add the body to the data base
    Post.add(body)
        .then(response =>{
            // return success http status code and message
            res.status(201).json({ message: 'A post has been created!'})
        })
        .catch(err =>{
            console.log(err)
            res.status(500).json({
                errorMessage: 'An error occured while creating a post!'
            })
        })
})

module.exports = router;
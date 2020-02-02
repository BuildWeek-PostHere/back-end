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

// get all posts
router.get('/', (req, res) =>{
    Post.find()
        .then(post =>{
            res.status(200).json(post)
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({ errorMessage: 'Error while getting posts on the server side!'})
        })
})

// gettign post by its id
router.get('/:id', (req, res) =>{
    Post.findById(req.params.id)
        .then(post =>{
            // checking if the post exist
            if (post){
                // send the post back
                res.json(post);
            }
            else{
                // return http status code Not Found and error message
                res.status(404).json({ errorMessage: 'Post with such id does not exist!'});
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({ errorMessage: 'Error while getting post on the server side!'})
        })
})

// get user related post
router.get('/:id/user', (req, res) =>{
    Post.findPost(req.params.id)
        .then(post =>{
            // checking if user has any post
            if(post.length > 0){
                res.status(200).json(post)
            }
            else{
                 // return http status code Not Found and error message
                res.status(404).json({ errorMessage: 'There is no post!'})
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({ errorMessage: 'Error while getting post on the server side!'})
        })
})
module.exports = router;
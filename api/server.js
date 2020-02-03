// import express
const express  = require('express');

// import helmet for security
const helmet = require('helmet');

// import cors for extra security
const cors = require('cors');

// get express to create a server
const server = express();

// invoke helmet
server.use(helmet());

// invoke cors
server.use(cors());

// teaching how to read json
server.use(express.json());

// importing users router
const usersRouter = require('../users/users-router.js');

// import auth router
const authRouter = require('../auth/auth-router.js');

// import post router
const postRouter = require('../reddit_post/post-router.js');

const restricted = require("../auth/restricted-middleware");

// endpoint for users
server.use('/api/users', usersRouter);

// endpoint for auth
server.use('/api/auth', authRouter);

// endpoint for posts
server.use('/api/posts', restricted, postRouter);


server.get('/', (req, res) =>{
    res.send("<h1>Hello my React friends from the server!</h1>");
})

// export server
module.exports = server;
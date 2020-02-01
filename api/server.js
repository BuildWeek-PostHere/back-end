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

// endpoint for users
server.use('/api/users', usersRouter);

server.get('/', (req, res) =>{
    res.send("Hello my React friends from the server!");
})

// export server
module.exports = server;
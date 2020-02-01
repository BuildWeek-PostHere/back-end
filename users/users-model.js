// import data base configuration
const db = require('../database/dbConfig.js');

// export methods 
module.exports = {
    find
}

// find method implementation
function find(){
    return db('users').select('id', "username");
}
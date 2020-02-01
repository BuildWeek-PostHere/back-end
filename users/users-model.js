// import data base configuration
const db = require('../database/dbConfig.js');

// export methods 
module.exports = {
    find,
    findBy,
    findById,
    add,
    remove
}

// find method implementation
function find(){
    return db('users').select('id', "username");
}

// find by id method implementation
function findById(id) {
    return db('users')
      .where({ id })
  }

// add method implementation
function add(user){
    return db('users')
        .insert(user,'id')
        .then(ids =>{
            const [id] = ids;
            return findById(id);
        })
}

// findBy method implementation
function findBy(user){
    return db('users').select('id', 'username', 'password').where(user);
}

// remove method implementation
function remove(id){
    return db('users').where("id", id).del();
}
// import data base config
const db = require('../database/dbConfig.js');

// export post methods
module.exports = {
    add,
    findById,
    find
}

// add implementation
function add(post){
    return db('posts')
        .insert(post, 'id')
        .then(ids =>{
            const [id] = ids;
            return findById(id);
        })
}

// find by id method inplementation
function findById(id){
    return db('posts')
        .select('id', 'post_body', 'title', 'best_place')
        .orderBy('id').where({id}).first(); 
}

// find method implementation
function find(){
    return db('posts');
}
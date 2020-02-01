// importing knex
const knex = require('knex');

// importing knex file
const knexConfig = require('../knexfile.js');

const development = process.env.NODE_ENV || 'development';

// exporting knex config
module.exports = knex(knexConfig.development);
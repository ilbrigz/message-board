//this file create the connections with monk module
const monk = require('monk');
const connectionString = 'localhost/messageboard';
const db = monk(connectionString);

module.exports = db;

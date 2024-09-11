const mongoose = require('mongoose');
// require('dotenv').config();

mongoose.connect(process.env.mongo_url || 'mongodb://localhost:27017/My-Portfolio', {
});

const connection = mongoose.connection;

connection.on('error', (err) => {
    console.error('Connection error:', err);
});

connection.on('connected', () => {
    console.log('Connected successfully to MongoDB');
});

module.exports = connection;

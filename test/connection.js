const mongoose = require('mongoose');

// connect to mongodb

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', () => {
    console.log('Connection has been made, now make fireworkds...');
}).on('error', (error) => {
    console.log('Connection error: ', error);
})
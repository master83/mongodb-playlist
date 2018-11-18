const mongoose = require('mongoose');

// ES6 promise
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before((done) => {
    // connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', () => {
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', (error) => {
        console.log('Connection error: ', error);
    })
});

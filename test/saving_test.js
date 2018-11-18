const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe tests
describe('Saving records', () => {

    // create tests
    it('save a record to the database', (done) => {
        var char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    });

    // next test

});
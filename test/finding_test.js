const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe tests
describe('Finding records', () => {

    beforeEach((done) => {
        var char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    });

    // create tests
    it('Find one record from the database', (done) => {
        MarioChar.findOne({ name: 'Mario' }).then((result) => {
            assert(result.name === 'Mario');
            done();
        });
    });

    // next test

});
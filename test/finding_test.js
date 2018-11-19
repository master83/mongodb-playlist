const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe tests
describe('Finding records', () => {

    var char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    });

    // find record
    it('Find one record from the database', (done) => {
        MarioChar.findOne({ name: 'Mario' }).then((result) => {
            assert(result.name === 'Mario');
            done();
        });
    });

    // find record by id
    it('Find one record by id from the database', (done) => {
        MarioChar.findOne({ _id: char._id }).then((result) => {
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });

});
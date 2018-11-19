
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe tests
describe('Deleting records', () => {

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

    it('delete one records from the database', (done) => {
        MarioChar.findOneAndRemove({name: 'Mario'}).then(() => {
            MarioChar.findOne({name: 'Mario'}).then((result) => {
                assert(result === null);
                done();
            });
        });
    })
});
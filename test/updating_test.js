
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe tests
describe('Updating records', () => {

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

    it('Update one records from the database', (done) => {
        
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(() => {
            MarioChar.findOne({_id: char._id}).then((result) => {
                assert(result.name === 'Luigi');
                done();
            });
        })

    })
});
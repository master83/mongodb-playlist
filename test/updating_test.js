
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// describe tests
describe('Updating records', () => {

    var char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
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

    });

    it('Increment the weight by 1', (done) => {

        MarioChar.update({}, { $inc: {weight: 1} }).then(() => {
            MarioChar.findOne({ name: 'Mario' }).then((result) => {
                assert(result.weight === 51);
                done();
            });
        })

    });
});
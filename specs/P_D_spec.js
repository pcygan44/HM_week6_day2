const assert = require('assert');
const Paint = require('../Paint.js')
const Room = require('../Room.js')


describe('Room',function(){

    let room;
    beforeEach(function(){
        room = new Room ('15',painted_status = false);
        paint = new Paint('20');
    });

    it ('room should have area', function(){
        const actual = room.area;
        assert.strictEqual(actual, '15')
    })

    it ('mark room as painted',function(){
        room.markRoomAsPainted()
        const actual = room.painted_status
        assert.strictEqual(actual, true)

    })



    describe('paint',function(){
        it('check if paint is empty', function(){
            resoult = paint.checkIfItsEmpty();
            const actual = true;
            assert.strictEqual(actual, resoult)

        })
    })
        it('emplty the paint',function(){
            paint.addPaint('3');
            paint.addPaint('4');
            paint.addPaint('1');

            paint.removeAllPaint();
            const actual = paint.numberOfPaint()
            assert.deepStrictEqual(actual, 0)

        })

});
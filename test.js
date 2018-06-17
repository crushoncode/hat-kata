// 100 students are sitting in a row, and each has a hat on. 
// Their strange teacher (who is probably mad as a hatter from trying 
// to teach 100 students) walks along the line of students 
// (each time starting from the same end). 
// The first time he takes every hat off. On the second pass 
// he toggles the state of every second hat (putting on if off, 
// taking off if on), changing the ‘hat state’ of every even 
// numbered student. The third pass he toggles every third hat. 
// The fourth every fourth, and the fifth every fifth, and so on 
// until he has passed the students 100 times. What is the final state of the hats 
// (ie, which students have a hat on or off)?

// Plan for tackling problem:
// One list of 100 students with T/F for hats on/off

const assert = require('chai').assert
const getStudentArray = require('./index').getStudentArray

describe('example test', () => {
    it('does work', () => {
        assert.equal(false, false)
    })
})

describe('hats test', () => {
    describe('get student array test', () => {
        it('student array returns 10 students', () => {
            const studentArray = getStudentArray(10);
            assert.equal(studentArray.length, 10);
        })
        it('student array returns 3 students', () => {
            const studentArray = getStudentArray(3);
            assert.equal(studentArray.length, 3);
        })
    })
    describe('hat on/off test', () => {
        it('student array contains boolean values',() => {
            const studentArray = getStudentArray(10);
            studentArray.forEach((student) => {
                assert.isBoolean(student);
            })
        })
        it('first student is defined',() => {
            const studentArray = getStudentArray(3);
            assert.isDefined(studentArray[0]); 
        })
    })


})


/* global it describe*/
const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add 2 numbers', () => {
            var result = utils.add(33, 11);
    
            expect(result).toBe(44).toBeA('number');
        });
    
        it('should async add 2 numbers', (done) => {
            utils.addAsync(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });
    describe('#square', () => {
        it('should square a number', () => {
            var result = utils.square(8);
    
            expect(result).toBe(64).toBeA('number');
        });
    
        it('should async square a number', (done) => {
            utils.squareAsync(5, (square) => {
                expect(square).toBe(25).toBeA('number');
                done();
            });
        });
    });

    it('should verify if first and last names are set', () => {
        var result = utils.setName({
            firstName: null,
            lastName: null
        }, 'Tarik Ayoub');

        expect(result)
            .toBeA('object')
            .toInclude({
                firstName: 'Tarik',
                lastName: 'Ayoub'
            });
    });
});
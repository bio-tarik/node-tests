/* global it */
const expect = require('expect');

const utils = require('./utils');

it('should add 2 numbers', () => {
    var result = utils.add(33, 11);

    expect(result).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var result = utils.square(8);

    expect(result).toBe(64).toBeA('number');
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
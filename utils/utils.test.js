/* global it */

const utils = require('./utils');

it('should add 2 numbers', () => {
    var result = utils.add(33, 11);
    
    if (result !== 44)
        throw new Error(`Expected 44 but got ${result}.`);
});

it('should square a number', () => {
    var result = utils.square(8);
    
    if (result !== 64)
        throw new Error(`Expected 64 but got ${result}.`);
});
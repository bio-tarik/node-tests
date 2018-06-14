/* global it describe*/
const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it('should call saveUser with user object', () => {
        let email = 'a@a.com';
        let password = 'passw0rd';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});
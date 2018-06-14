/* global it */
const request = require('supertest');

let app = require('./server.js').app;

it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello World')
        .end(done);
});

it('should return a 404 error', (done) => {
    request(app)
        .get('/not-found')
        .expect(404)
        .expect({error: 'Page not found'})
        .end(done);
});
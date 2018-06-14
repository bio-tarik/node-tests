/* global it describe*/
const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

describe('server', () => {
    describe('GET #/', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello World')
                .end(done);
        });
    });

    describe('GET #/not-found', () => {
        it('should return a 404 error', (done) => {
            request(app)
                .get('/not-found')
                .expect(404)
                .expect({error: 'Page not found'})
                .end(done);
        });
        
    });

    it('should return an object with an \'About us\' title', (done) => {
        request(app)
            .get('/about')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    title: 'About us'
                });
            })
            .end(done);
    });
    
    it('should return an user called Ozzy', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    id: 1,
                    name: 'Ozzy'
                });
            })
            .end(done);
    });
});
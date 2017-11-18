'use strict';

//
// external modules
const supertest = require('supertest');
const { expect } = require('chai');

//
// internal modules
const helperTest = require('./helper.test');
const api = require('../src/microservice/notes.microservice');

describe('Get all notes', () => {
  const request = supertest(api);

  it('with user id', (done) => {
    request.get('/notes')
      .set('x-user-id', 'user-to-test-integrated')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(200);
        expect(res.headers['content-type']).to.be.equals('application/json; charset=utf-8');
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('notes');
        expect(res.body.data).to.have.property('limit');
        done();
      });
  });

  it('without user id', (done) => {
    request.get('/notes')
      .accept('json')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(500);
        helperTest.validateBodyError(expect, res);
        done();
      });
  });
});
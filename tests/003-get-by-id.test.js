'use strict';

//
// external modules
const supertest = require('supertest');
const { expect } = require('chai');

//
// internal modules
const helperTest = require('./helper.test');
const api = require('../src/microservice/notes.microservice');

describe('Get note', () => {
  const request = supertest(api);

  it('valid', (done) => {
    request.get('/notes/7cd20cd9-388f-454d-ba20-3715714ba2b3')
      .set('x-user-id', 'user-to-test-integrated')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(200);
        expect(res.headers['content-type']).to.be.equals('application/json; charset=utf-8');
        done();
      });
  });

  it('invalid user id', (done) => {
    request.get('/notes/7cd20cd9-388f-454d-ba20-3715714ba2b3')
      .accept('json')
      .set('x-user-id', 'invalid-user-id')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(404);
        helperTest.validateBodyError(expect, res);
        done();
      });
  });

  it('without user id', (done) => {
    request.get('/notes/7cd20cd9-388f-454d-ba20-3715714ba2b3')
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

  it('invalid note id', (done) => {
    request.get('/notes/7cd20cd9-388f-454d-ba20-3715714ba2b3')
      .set('x-user-id', 'user-to-test-integrated-invalid')
      .accept('json')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(404);
        helperTest.validateBodyError(expect, res);
        done();
      });
  });
});
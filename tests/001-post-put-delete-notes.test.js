'use strict';

//
// external modules
const supertest = require('supertest');
const { expect } = require('chai');

//
// internal modules
const helperTest = require('./helper.test');
const api = require('../src/microservice/notes.microservice');

describe('Create, Update and Delete notes', () => {
  const request = supertest(api);

  let noteId;
  it('Create success', (done) => {
    request.post('/notes')
      .set('x-user-id', 'user-to-test-integrated')
      .send({
        title: 'Test create',
        content: 'Test to create a note'
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(201);
        expect(res.headers['content-type']).to.be.equals('application/json; charset=utf-8');
        noteId = res.body.data.id;
        done();
      });
  }).timeout(2000);

  it('Create error, without user', (done) => {
    request.post('/notes')
      .send({
        title: 'Test create',
        content: 'Test to create a note'
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(500);
        helperTest.validateBodyError(expect, res);
        done();
      });
  }).timeout(2000);

  it('Update success', (done) => {
    request.put(`/notes/${noteId}`)
      .set('x-user-id', 'user-to-test-integrated')
      .send({
        title: 'Test update',
        content: 'Test to update the note'
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(200);
        expect(res.headers['content-type']).to.be.equals('application/json; charset=utf-8');
        done();
      });
  }).timeout(2000);

  it('Update error, note not found', (done) => {
    request.put('/notes/not-found')
      .set('x-user-id', 'user-to-test-integrated')
      .send({
        title: 'Test update',
        content: 'Test to update the note'
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(404);
        helperTest.validateBodyError(expect, res);
        done();
      });
  }).timeout(3000);

  it('Delete', (done) => {
    request.delete(`/notes/${noteId}`)
      .set('x-user-id', 'user-to-test-integrated')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.status).to.be.equals(200);
        done();
      });
  }).timeout(3000);
});
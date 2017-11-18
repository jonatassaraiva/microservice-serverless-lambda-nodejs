'use strict';

//
// internal modules
const notesRepositoy = require('./repositories/notes.repository');
const { responseHelper } = require('../helpers');

const notesController = {
  getById(req, res) {
    const { id } = req.params;
    const userId = req.headers['x-user-id'];
    notesRepositoy.getById(id, userId)
      .then(result => {
        responseHelper.success(req, res, result);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  },

  getAll(req, res) {
    const userId = req.headers['x-user-id'];
    const { limit, startKey } = req.query;

    notesRepositoy.getAllByUser(userId, startKey, limit)
      .then(result => {
        responseHelper.success(req, res, result);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  },

  create(req, res) {
    const userId = req.headers['x-user-id'];
    notesRepositoy.create(req.body, userId)
      .then(result => {
        responseHelper.success(req, res, result, 201);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  },

  update(req, res) {
    const { id } = req.params;
    const userId = req.headers['x-user-id'];
    const { title, content } = req.body;
    notesRepositoy.update({ id, userId, title, content }, userId)
      .then(result => {
        responseHelper.success(req, res, result, 200);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  },

  delete(req, res) {
    const { id } = req.params;
    const userId = req.headers['x-user-id'];
    notesRepositoy.delete(id, userId)
      .then(result => {
        responseHelper.success(req, res, result, 200);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  }
};

module.exports = notesController;
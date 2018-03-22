'use strict';

//
// internal modules
const { responseHelper } = require('./helpers');
const repository = require('./repository');

const notesController = {
  get(req, res) {
    const userId = req.headers['x-user-id'];
    const { id } = req.params;
    repository.getByUserAndId(userId, id)
      .then(result => {
        responseHelper.success(req, res, result);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  },

  getAll(req, res) {
    const userId = req.headers['x-user-id'];
    repository.getAllByUser(userId)
      .then(result => {
        responseHelper.success(req, res, result);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  },

  create(req, res) {
    const userId = req.headers['x-user-id'];
    const note = {
      title: req.body.title,
      content: req.body.content
    };

    repository.create(userId, note)
      .then(result => {
        responseHelper.success(req, res, result);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  },

  update(req, res) {
    const userId = req.headers['x-user-id'];
    const { id } = req.params;
    const { title, content } = req.body;
    repository.update(userId, id, { title, content })
      .then(result => {
        responseHelper.success(req, res, result);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  },

  delete(req, res) {
    const { id } = req.params;
    const userId = req.headers['x-user-id'];
    repository.delete(userId, id)
      .then(result => {
        responseHelper.success(req, res, result);
      })
      .catch(err => {
        responseHelper.error(req, res, err);
      });
  }
};

module.exports = notesController;
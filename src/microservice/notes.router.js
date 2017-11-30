'use strict';

//
// exnternal modules
const express = require('express');

//
// internal modules
const notesController = require('./notes.controller');

//
// routes
const notesRouter = express.Router();
notesRouter.route('/notes')
  .get(notesController.getAll)
  .post(notesController.create);

notesRouter.route('/notes/:id')
  .get(notesController.getById)
  .put(notesController.update)
  .delete(notesController.delete);

module.exports = notesRouter;
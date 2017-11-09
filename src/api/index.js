'use strict';

//
// exnternal modules
const express = require('express');
const bodyParser = require('body-parser');

//
// configure microservice with express
const microservice = express();
microservice.use(bodyParser.json());

//
// internal modules
const notesController = require('./controllers');

//
// routes
microservice.get('/notes/:id', notesController.getById);
microservice.put('/notes/:id', notesController.update);
microservice.delete('/notes/:id', notesController.delete);

microservice.get('/notes', notesController.getAll);
microservice.post('/notes', notesController.create);

module.exports = microservice;
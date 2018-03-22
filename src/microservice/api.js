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
const notesController = require('./controller');

//
// routes
microservice.get('/notes', notesController.getAll);
microservice.get('/notes/:id', notesController.get);
microservice.post('/notes', notesController.create);
microservice.put('/notes/:id', notesController.update);
microservice.delete('/notes/:id', notesController.delete);


module.exports = microservice;
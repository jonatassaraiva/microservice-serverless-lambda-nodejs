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
const notesRouter = require('./notes.router');

//
// routes
microservice.use(notesRouter);

module.exports = microservice;
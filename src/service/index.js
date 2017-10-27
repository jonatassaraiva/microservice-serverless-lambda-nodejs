'use strict';

//
// exnternal modules
const express = require('express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

//
// microservice
const microservice = express();
microservice.use(awsServerlessExpressMiddleware.eventContext());

//
// routes
const basePath = '/notes';
microservice.get(basePath, (req, res) => {
  res.status(200).send({ message: 'OK' });
});

microservice.post(basePath, (req, res) => {
  res.status(201).send({ message: 'OK' });
});

microservice.put(basePath, (req, res) => {
  res.status(200).send({ message: 'OK' });
});

microservice.delete(basePath, (req, res) => {
  res.status(200).send({ message: 'OK' });
});

module.exports = microservice;
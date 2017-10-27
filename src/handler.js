'use strict';

//
// external modules
const awsServerlessExpress = require('aws-serverless-express');

//
// microservice
const microservice = require('./service');

//
// exposed microservice
const microserviceServer = awsServerlessExpress.createServer(microservice);
module.exports.microservice = (event, context) => awsServerlessExpress.proxy(microserviceServer, event, context);
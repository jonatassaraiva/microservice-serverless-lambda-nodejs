'use strict';

//
// external modules
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

//
// microservice
const microservice = require('./microservice/api');
microservice.use(awsServerlessExpressMiddleware.eventContext());

//
// exposed microservice
const microserviceServer = awsServerlessExpress.createServer(microservice);
module.exports.microservice = (event, context) => awsServerlessExpress.proxy(microserviceServer, event, context);
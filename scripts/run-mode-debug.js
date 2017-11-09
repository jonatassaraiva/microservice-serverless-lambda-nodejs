'use strict';

//
// env
require('dotenv').config();

//
// external modules
const dynamo = require('dynamodb');
dynamo.AWS.config.update({ accessKeyId: process.env.ACCESS_KEY, secretAccessKey: process.env.SECRET_KEY, region: process.env.REGION });

//
// microservice with express
const microservice = require('../src/api');

microservice.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Example app listening on port 3000');
  /* eslint-enable no-console */
});
'use strict';

//
// env
require('dotenv').config();

//
// external modules
const dynamo = require('dynamodb');
dynamo.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

//
// microservice with express
const microservice = require('../src/microservice/notes.microservice');

microservice.listen(3000, () => {
  /* eslint-disable no-console */
  console.log('Example app listening on port 3000');
  /* eslint-enable no-console */
});
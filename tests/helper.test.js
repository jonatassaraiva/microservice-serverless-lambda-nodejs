'use strict';

//
// external modules
const dynamo = require('dynamodb');

//
// env
require('dotenv').config();
dynamo.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const helperTest = {
  validateBodyError(expect, res) {
    expect(res.headers['content-type']).to.be.equals('application/json; charset=utf-8');
    expect(res.body).to.have.property('error');
    expect(res.body.error).to.have.property('code');
    expect(res.body.error).to.have.property('message');
  }
};

module.exports = helperTest;
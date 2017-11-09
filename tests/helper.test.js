'use strict';

//
// external modules
const dynamo = require('dynamodb');

//
// env
require('dotenv').config();
dynamo.AWS.config.update({ accessKeyId: process.env.ACCESS_KEY, secretAccessKey: process.env.SECRET_KEY, region: process.env.REGION });

const helperTest = {
  validateBodyError(expect, res) {
    expect(res.headers['content-type']).to.be.equals('application/json; charset=utf-8');
    expect(res.body).to.have.property('error');
    expect(res.body.error).to.have.property('code');
    expect(res.body.error).to.have.property('message');
  }
};

module.exports = helperTest;
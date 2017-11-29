'use strict';

const requestHelper = {
  getRequestId(req) {
    return req.apiGateway ? req.apiGateway.context.awsRequestId : undefined;
  }
};

module.exports = requestHelper;
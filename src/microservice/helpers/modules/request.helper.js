'user strict';

const requestHelper = {
  getRequestId(req) {
    if (req.apiGateway && req.apiGateway.context) {
      return req.apiGateway.context.awsRequestId;
    }
    if (req.headers && req.headers['x-apigateway-event']) {
      try {
        const apiGatewayEvent = JSON.parse(decodeURIComponent(req.headers['x-apigateway-event']));
        return apiGatewayEvent.requestContext.requestId;
      } catch (error) {
        /* eslint-disable no-console */
        console.error('Error while getting requestId.', error);
        /* eslint-enable no-console */
      }
    }
  }
};

module.exports = requestHelper;
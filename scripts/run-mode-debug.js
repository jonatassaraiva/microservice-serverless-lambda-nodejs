'use strict';

//
// env
require('dotenv').config();

//
// microservice with express
const microservice = require('../src/microservice/api');

microservice.listen(process.env.PORT || 3000, () => {
  /* eslint-disable no-console */
  console.log(`Example app listening on port ${process.env.PORT}`);
  /* eslint-enable no-console */
});
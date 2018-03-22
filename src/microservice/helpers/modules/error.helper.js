'user strict';

class ErrorHelper extends Error {
  constructor(message, httpStatusCode, category) {
    super(message);
    this.httpStatusCode = httpStatusCode;
    this.category = category;
    this.code = `${httpStatusCode}-${category}`;
  }
}

module.exports = ErrorHelper;

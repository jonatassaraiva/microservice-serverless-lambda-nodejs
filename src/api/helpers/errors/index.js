'user strict';

class MicroServiceError extends Error {
  constructor(name, message, code) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

module.exports = {
  MicroServiceError
};
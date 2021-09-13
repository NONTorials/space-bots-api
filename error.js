module.exports = function RandomKeyError(message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = "[Space Bots API Error]";
  this.message = message;

};

require('util').inherits(module.exports, Error);
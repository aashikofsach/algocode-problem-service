const BaseError = require("./base.error");

const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      "BadRequest",
      StatusCodes.BadRequest,
      `Invalid Structure for ${propertyName}`,
      details
    );
  }
}

module.exports = BadRequest;

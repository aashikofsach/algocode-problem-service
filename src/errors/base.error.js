class BaseError extends Error {
  constructor(name, statusCode, description, details) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;

    // console.log("below we are printing the error stack");
    // console.log(this.stack);
  }
}

module.exports = BaseError;

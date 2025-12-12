const BaseError = require("../errors/base.error");

const { StatusCodes } = require("http-status-codes");

function errorhandlers(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message, // this is coming from Error class 
      error: err.details,
      data: {},
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "something went wrong",
      error: err,
      data: {},
    });
}

module.exports = errorhandlers ;


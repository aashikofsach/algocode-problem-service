const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/not-implemented.error");
const errorhandlers = require("../utils/errorHandler");

function pingProblemController(req, res) {
  return res.json({ message: "Ping check is ok for problems controller" });
}

function addProblem(req, res, next) {
  // return res
  //   .status(StatusCodes.NOT_IMPLEMENTED)
  //   .json({ message: "Not implemented" });

  // not implemented
  try {
    throw new NotImplementedError("addProblem");
  } catch (err) {
    next(err);
  }
}

function getProblems(req, res , next) {
  // return res
  //   .status(StatusCodes.NOT_IMPLEMENTED)
  //   .json({ message: "Not implemented" });

  // not implemented
  try {
    throw new NotImplementedError("addProblem");
  } catch (err) {
    next(err);
  }
}
function getProblem(req, res, next) {
  // not implemented
  try {
    throw new NotImplementedError("addProblem");
  } catch (err) {
    next(err);
  }
  // return res
  //   .status(StatusCodes.NOT_IMPLEMENTED)
  //   .json({ message: "Not implemented" });
}
function updateProblem(req, res, next) {
  // not implemented
  try {
    throw new NotImplementedError("addProblem");
  } catch (err) {
    next(err);
  }
  // return res
  //   .status(StatusCodes.NOT_IMPLEMENTED)
  //   .json({ message: "Not implemented" });
}
function deleteProblem(req, res, next) {
  // return res
  //   .status(StatusCodes.NOT_IMPLEMENTED)
  //   .json({ message: "Not implemented" });

  // not implemented
  try {
    throw new NotImplementedError("addProblem");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
  pingProblemController,
};

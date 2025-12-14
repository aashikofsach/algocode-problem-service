const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/not-implemented.error");
const errorhandlers = require("../utils/errorHandler");
const { problemService } = require("../services");
const {ProblemRepository} = require("../repositories");

const ProblemService = new problemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Ping check is ok for problems controller" });
}

async function addProblem(req, res, next) {
  // return res
  //   .status(StatusCodes.NOT_IMPLEMENTED)
  //   .json({ message: "Not implemented" });

  // not implemented
  try {
    // throw new NotImplementedError("addProblem");
    const newProblem = await ProblemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      sucess : true ,
      message : "Sucessfully created a problem",
      error : {},
      data : newProblem
    })

  } catch (err) {
    next(err);
  }
}

 async function getProblems(req, res , next) {
  // return res
  //   .status(StatusCodes.NOT_IMPLEMENTED)
  //   .json({ message: "Not implemented" });

  // not implemented
  try {
     const allProblems = await ProblemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      sucess : true ,
      message : "Sucessfully fetched all problems",
      error : {},
      data : allProblems
    })
    // throw new NotImplementedError("addProblem");
  } catch (err) {
    next(err);
  }
}
 async function getProblem(req, res, next) {
  // not implemented
  try {
    // throw new NotImplementedError("addProblem");
     const problem = await ProblemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      sucess : true ,
      message : "Sucessfully fetched the problem",
      error : {},
      data : problem
    })
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

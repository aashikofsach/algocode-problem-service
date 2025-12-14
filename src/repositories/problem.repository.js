const logger = require("../config/logger.config");
const NotFoundError = require("../errors/not-found.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      console.log("yaha tak", id);
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFoundError("problem", id);
      }
      console.log(problem, "aithe rakh");
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        logger.error(`problem with id ${id}, not found in db`)
        throw new NotFoundError("problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;

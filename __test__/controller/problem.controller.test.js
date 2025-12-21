const problemController = require("../../src/controllers/problem.controller");
const problemService = require("../../src/services/problem-service");
const { StatusCodes } = require("http-status-codes");

jest.mock("../../src/services/problem-service");

describe("test", () => {
  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("should get all problem", async () => {
    const problems = [];
    problemService.prototype.getAllProblems.mockResolvedValue(problems);

    await problemController.getProblems(req, res, next);

    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(problemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
    expect(next).not.toHaveBeenCalled();
  });
});

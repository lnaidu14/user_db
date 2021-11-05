const { validateBody } = require("../../../helpers/validations");
const statusConstants = require("../../../common/statusConstants");
const errorMessages = require("../../../common/errorMessages");

describe("testing validateBody", () => {
  it("should return an error if firstName is not present in body", () => {
    const body = {
      lastName: "lastName",
    };

    try {
      validateBody(body);
    } catch (err) {
      expect(err.message).toBe(errorMessages.createUser.name);
      expect(err.status).toBe(statusConstants.error.bad_request);
    }
  });

  it("should return an error if lastName is not present in body", () => {
    const body = {
      firstName: "firstName",
    };

    try {
      validateBody(body);
    } catch (err) {
      expect(err.message).toBe(errorMessages.createUser.name);
      expect(err.status).toBe(statusConstants.error.bad_request);
    }
  });

  it("should successfully pass validation if both firstName and lastName are present in body", () => {
    const body = {
      firstName: "firstName",
      lastName: "lastName",
    };

    // Figure out a way add an assertion to this
    try {
      validateBody(body);
    } catch (err) {}
  });
});

const { validateBody } = require("../../../helpers/validations");
const { insertDB, fetchDocument } = require("../../../helpers/db");
const statusConstants = require("../../../common/statusConstants");
const errorMessages = require("../../../common/errorMessages");
const { v4 } = require("uuid");

describe("testing validateBody", () => {
  it("should return an error if firstName is not present in body", () => {
    const body = {
      lastName: "lastName",
    };

    try {
      validateBody(body);
    } catch (err) {
      expect(err.message).toEqual(errorMessages.createUser.name);
      expect(err.status).toEqual(statusConstants.error.bad_request);
    }
  });

  it("should return an error if lastName is not present in body", () => {
    const body = {
      firstName: "firstName",
    };

    try {
      validateBody(body);
    } catch (err) {
      expect(err.message).toEqual(errorMessages.createUser.name);
      expect(err.status).toEqual(statusConstants.error.bad_request);
    }
  });

  it("should return an error if both firstName and lastName is not present in body", () => {
    try {
      validateBody({});
    } catch (err) {
      expect(err.message).toEqual(errorMessages.createUser.name);
      expect(err.status).toEqual(statusConstants.error.bad_request);
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

describe("testing insertDB", () => {
  it("should successfully add document into db", async () => {
    const body = {
      userId: v4(),
      firstName: "firstName",
      lastName: "lastName",
    };

    await insertDB(body);
    const document = await fetchDocument({ userId: body.userId });
    expect(document.userId).toEqual(body.userId);
    expect(document.firstName).toEqual(body.firstName);
    expect(document.lastName).toEqual(body.lastName);
  });
});

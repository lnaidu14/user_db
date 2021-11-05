const statusConstants = require("../common/statusConstants");
const errorMessages = require("../common/errorMessages");

const validateBody = (body) => {
  if (body.firstName && body.lastName) {
    return body;
  } else {
    throw {
      status: statusConstants.error.bad_request,
      message: errorMessages.createUser.name,
    };
  }
};

module.exports = {
  validateBody,
};

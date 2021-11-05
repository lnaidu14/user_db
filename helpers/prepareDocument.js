const { v4 } = require("uuid");

const prepareDocument = (body) => {
  return {
    userId: v4(),
    firstName: body.firstName,
    lastName: body.lastName,
  };
};

module.exports = {
  prepareDocument,
};

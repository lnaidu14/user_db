const { v4 } = require("uuid");

const prepareDocument = (body, replace) => {
  return {
    userId: body.userId || v4(),
    firstName: replace.firstName || body.firstName,
    lastName: replace.lastName || body.lastName,
  };
};

module.exports = {
  prepareDocument,
};

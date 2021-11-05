const { validateBody } = require("../helpers/validations");
const { insertDB } = require("../helpers/db");

const createDocument = (body) => {
  try {
    validateBody(body);
    insertDB(body);
    return {
      status: 200,
      message: "successfully inserted user into db",
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createDocument,
};

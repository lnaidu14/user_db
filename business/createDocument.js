const { validateBody } = require("../helpers/validations");
const { insertDB } = require("../helpers/db");
const { prepareDocument } = require("../helpers/prepareDocument");

const createDocument = (body) => {
  try {
    validateBody(body);
    const document = prepareDocument(body);
    insertDB(document);
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

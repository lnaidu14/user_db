const { validateBody } = require("../helpers/validations");
const { insertDB } = require("../helpers/db");
const { prepareDocument } = require("../helpers/prepareDocument");

const createUser = async (body) => {
  try {
    validateBody(body);
    const document = prepareDocument(body);
    await insertDB(document);
    return Promise.resolve({
      status: 200,
      userId: document.userId,
      message: "successfully inserted user into db",
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createUser,
};

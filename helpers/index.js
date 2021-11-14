const { insertDB, deleteDB, updateDB, fetchDB } = require("./db");
const { prepareDocument } = require("./prepareDocument");
const { validateBody } = require("./validations");

module.exports = {
  insertDB,
  deleteDB,
  fetchDB,
  updateDB,
  prepareDocument,
  validateBody,
};

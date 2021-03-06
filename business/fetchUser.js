const errorMessages = require("../common/errorMessages");
const statusConstants = require("../common/statusConstants");
const { fetchDB } = require("../helpers/db");

const fetchUser = async (id) => {
  try {
    const document = await fetchDB({ userId: id });
    if (!document)
      throw {
        status: statusConstants.error.not_found,
        message: errorMessages.fetchUser.not_found,
      };

    return Promise.resolve({
      status: 200,
      document,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchUser,
};

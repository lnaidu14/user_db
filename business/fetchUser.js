const { fetchDocument } = require("../helpers/db");

const fetchUser = async (id) => {
  try {
    const document = await fetchDocument({ userId: id });

    if (!document)
      throw {
        status: 404,
        message: "user not found",
      };

    return Promise.resolve(document);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  fetchUser,
};

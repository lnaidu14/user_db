const {
  fetchDB,
  updateDB,
  validateBody,
  prepareDocument,
} = require("../helpers/index");
const { errorMessages, statusConstants } = require("../common/index");

const updateUser = async (id, body) => {
  try {
    const document = await fetchDB({ userId: id });
    if (!document)
      throw {
        status: statusConstants.error.not_found,
        message: errorMessages.fetchUser.not_found,
      };

    validateBody(body);
    body.userId = document.userId;
    await updateDB({ userId: id }, body);

    return Promise.resolve({
      status: 200,
      message: "user updated successfully",
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  updateUser,
};

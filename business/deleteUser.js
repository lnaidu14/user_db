const { fetchDB, deleteDB } = require("../helpers/db");
const { errorMessages, statusConstants } = require("../common/index");

const deleteUser = async (id) => {
  try {
    const document = await fetchDB({ userId: id });
    if (!document)
      throw {
        status: statusConstants.error.not_found,
        message: errorMessages.fetchUser.not_found,
      };

    await deleteDB({ userId: id });

    return Promise.resolve({
      status: 200,
      message: "user deleted successfully",
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  deleteUser,
};

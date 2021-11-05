const validateBody = (body) => {
  if (body.firstName && body.lastName) {
    return body;
  } else {
    throw {
      status: 400,
      message: "body should consist of both firstName and lastName",
    };
  }
};

module.exports = {
  validateBody,
};

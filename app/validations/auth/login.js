module.exports = (joi) => {
  return joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  });
};

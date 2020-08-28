module.exports = (joi) => {
  return joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
  });
};

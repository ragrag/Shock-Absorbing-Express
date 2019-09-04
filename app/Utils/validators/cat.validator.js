const Joi = require('joi');

module.exports.validateCat = (name) => {
  const schema = {
    name: Joi.string()
      .max(255)
      .required()
  };
  return Joi.validate({ name }, schema);
};

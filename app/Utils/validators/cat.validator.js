const Joi = require('joi');

module.exports.validateCat = (name) => {
  const schema = {
    name: Joi.string().required()
  };
  return Joi.validate({ name }, schema);
};

const Joi = require('joi');

module.exports.validateUpdate = (userDTO) => {
  const schema = {
    displayName: Joi.string()
      .min(3)
      .max(255),
    username: Joi.string()
      .min(3)
      .max(255)
  };
  return Joi.validate(userDTO, schema);
};

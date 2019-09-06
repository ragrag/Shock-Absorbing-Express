const Joi = require('joi');

module.exports.validateUserRegister = (userDTO) => {
  const schema = {
    displayName: Joi.string()
      .min(3)
      .max(255),
    email: Joi.string()
      .max(255)
      .required()
      .email(),
    password: Joi.string().required(),
    username: Joi.string()
      .min(3)
      .max(255)
      .required()
  };
  return Joi.validate(userDTO, schema);
};

module.exports.validateUserLogin = (userDTO) => {
  const schema = {
    email: Joi.string()
      .max(255)
      .required()
      .email(),
    password: Joi.string().required()
  };
  return Joi.validate(userDTO, schema);
};

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

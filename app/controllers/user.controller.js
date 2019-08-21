const Boom = require('boom');
const _ = require('lodash');
const UserService = require('../services/user.service');
const { validateUserLogin, validateUserRegister } = require('../Utils/validators/user.validator');

class UserController {
  static async registerUser(req, res, next) {
    try {
      const userDTO = _.pick(req.body, ['name', 'email', 'password']);
      const { error } = validateUserRegister(userDTO);
      if (error) throw Boom.badRequest(error.details[0].message);
      const { user, token } = await UserService.register(userDTO);
      const response = { user: _.pick(user, ['_id', 'name', 'email']), token: token };
      return res.status(201).send(response);
    } catch (err) {
      next(err);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const userDTO = _.pick(req.body, ['email', 'password']);
      const { error } = validateUserLogin(userDTO);
      if (error) throw Boom.badRequest(error.details[0].message);
      const token = await UserService.login(userDTO);
      return res.status(200).send({ token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;

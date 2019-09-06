const Boom = require('boom');
const _ = require('lodash');
const UserService = require('../services/user.service');
const { validateUserLogin, validateUserRegister } = require('../Utils/validators/user.validator');

class UserController {
  static async registerUser(req, res, next) {
    try {
      const userDTO = _.pick(req.body, ['displayName', 'email', 'password', 'username']);
      userDTO.email = userDTO.email.toLowerCase();
      const { error } = validateUserRegister(userDTO);
      if (error) throw Boom.badRequest(error.details[0].message);
      const { user, token } = await UserService.register(userDTO);
      const response = { user: _.pick(user, ['_id', 'displayName', 'email', 'username']), token: token };
      return res.status(201).json(response);
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

  static async authenticateSocial(req, res, next) {
    const token = req.user.generateAuthToken();
    return res.status(200).json({ token });
  }

  static async show(req, res, next) {
    try {
      const user = await UserService.getUser(req.params.id);
      const response = _.pick(user, ['displayName', 'username', 'photo', 'followers', 'following']);
      return res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const userDTO = _.pick(req.body, ['displayName', 'username']);
      await UserService.updateUser(req.user, userDTO);
      return res.status(200).send();
    } catch (err) {
      next(err);
    }
  }

  static async destroy(req, res, next) {
    try {
      await UserService.deleteUser(req.user);
      return res.status(200).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;

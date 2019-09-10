const Boom = require('boom');
const _ = require('lodash');
const UserService = require('../services/user.service');
const { validateUserLogin, validateUserRegister } = require('../Utils/validators/user.validator');

class UserController {
  static async authenticateSocial(req, res, next) {
    const token = req.user.generateAuthToken();
    return res.status(200).json({ token });
  }

  static async getUser(req, res, next) {
    try {
      const user = await UserService.getUser(req.params.id);
      const response = _.pick(user, ['displayName', 'username', 'photo', 'followers', 'following']);
      return res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const userDTO = _.pick(req.body, ['displayName', 'username']);
      await UserService.updateUser(req.user, userDTO);
      return res.status(200).send();
    } catch (err) {
      next(err);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      await UserService.deleteUser(req.user);
      return res.status(200).send();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;

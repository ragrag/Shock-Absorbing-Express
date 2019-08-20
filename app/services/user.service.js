const Boom = require('boom');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');

class UserService {
  static async createUser(userDTO) {
    try {
      const user = await UserModel.createUser(userDTO);
      const token = user.generateAuthToken();
      return { user, token };
    } catch (err) {
      throw err;
    }
  }

  static async authenticateUser(userDTO) {
    try {
      const user = await UserModel.getUser(userDTO.email);
      if (!user) throw Boom.badRequest("User doesn't exist");
      const validPassword = await bcrypt.compare(userDTO.password, user.password);
      if (!validPassword) throw Boom.unauthorized('Incorrect password');
      const token = user.generateAuthToken();
      return token;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;

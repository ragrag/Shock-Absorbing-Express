const bcrypt = require('bcrypt');
const Boom = require('boom');
const UserModel = require('../models/user.model');

class UserService {
  static async register(userDTO) {
    try {
      const user = await UserModel.createUser(userDTO);
      const token = user.generateAuthToken();
      return { user, token };
    } catch (err) {
      throw err;
    }
  }

  static async login(userDTO) {
    try {
      const user = await UserModel.findOne({ email: userDTO.email });
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

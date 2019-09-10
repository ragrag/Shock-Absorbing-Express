const Boom = require('boom');
const UserModel = require('../models/user.model');

class UserService {
  static async getUser(id) {
    try {
      const user = await UserModel.findById(id);
      if (!user) throw Boom.notFound("User doesn't exist");
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(user, userDTO) {
    try {
      if (userDTO.username) {
        const userCheck = await UserModel.findOne({ username: userDTO.username });
        if (userCheck) throw Boom.conflict('Username already exists');
      }
      const { err } = await user.update(userDTO);
      if (err) throw Boom.badImplementation('Error when updating');
      return;
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(user) {
    try {
      const { err } = await user.delete();
      if (err) throw Boom.badImplementation('Error when deleting user');
      return;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;

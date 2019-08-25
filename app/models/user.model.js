const mongoose = require('mongoose');
const Boom = require('boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  provider: String
});

mongoose.set('useCreateIndex', true);

UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

const UserModel = mongoose.model('user', UserSchema);

UserModel.createUser = async (userDTO) => {
  try {
    let user = await UserModel.findOne({ email: userDTO.email });
    if (user) throw Boom.conflict('User already registerd');
    user = new UserModel(userDTO);
    user.password = await bcrypt.hash(user.password, 10);
    return await user.save();
  } catch (err) {
    throw err;
  }
};

module.exports = UserModel;

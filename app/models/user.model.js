const mongoose = require('mongoose');
const Boom = require('boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  displayName: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String
  },
  photo: {
    type: String
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  socialProvider: {
    provider: {
      type: String
    },
    providerId: {
      type: String
    }
  }
});
UserSchema.set('timestamps', true);
mongoose.set('useCreateIndex', true);

UserSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

const UserModel = mongoose.model('user', UserSchema);

UserModel.createUser = async (userDTO) => {
  try {
    let user = await UserModel.find({ $or: [{ email: userDTO.email }, { username: userDTO.username }] });
    if (user.length > 0) {
      throw Boom.conflict(user[0].username === userDTO.username ? 'username already exists' : 'email already exists');
    }
    user = new UserModel(userDTO);
    user.password = await bcrypt.hash(user.password, 10);
    return await user.save();
  } catch (err) {
    throw err;
  }
};

module.exports = UserModel;

const UserModel = require('../../models/user.model');

async function assignUser(req, res, next) {
  try {
    const user = await UserModel.findById(req.user._id);
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).send('Invalid User');
  }
}

module.exports = assignUser;

const User = require('../../../app/models/user.model');
const jwt = require('jsonwebtoken');

require('dotenv').config();

describe('user.generateAuthToken', () => {
  it('Should return a valid JWT', () => {
    const user = new User();
    const token = user.generateAuthToken();
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    expect(decodedToken).toMatchObject({ _id: user.id });
  });
});

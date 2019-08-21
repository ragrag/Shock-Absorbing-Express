const jwt = require('jsonwebtoken');

function extractToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
}

function authenticate(req, res, next) {
  const token = extractToken(req);
  if (!token) return res.status(401).send('Access denied. Auth token not provided.');
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(400).send('Invalid Auth token');
  }
}

module.exports = authenticate;

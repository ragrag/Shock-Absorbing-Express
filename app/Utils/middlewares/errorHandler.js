const Boom = require('boom');

/* eslint-disable */
function handleError(err, req, res, next) {
  return res.status(Boom.isBoom(err) ? err.output.statusCode : 500).json(err.message);
}

module.exports = handleError;

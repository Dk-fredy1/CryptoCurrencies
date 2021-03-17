const jwt = require('jsonwebtoken');

const options = {
  expiresIn: '1h'
};

const sign = (payload, secret) => jwt.sign(payload, secret, options);

const verify = (token, secret) => jwt.verify(token, secret);

module.exports = {
  sign,
  verify
};

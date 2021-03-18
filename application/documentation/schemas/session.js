const { token, username, password } = require('./common');

exports.login = {
  type: 'object',
  properties: {
    username,
    password
  }
};

exports.loginResponse = {
  type: 'object',
  properties: {
    token
  }
};

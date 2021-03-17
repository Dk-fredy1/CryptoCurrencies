const jwt = require('../helpers/util/jwt');
const { Users } = require('../driven-adapters/sequelize');
const config = require('../../application/config');

const createOne = userFields => Users.create(userFields);

const getByUsername = username => Users.findOne({
  where: { username }
});

const generateToken = user => jwt.sign({
  username: user.username,
  id: user.id
}, config.auth.secret);

const validateToken = token => jwt.verify(token, config.auth.secret);

module.exports = {
  createOne,
  getByUsername,
  generateToken,
  validateToken
};

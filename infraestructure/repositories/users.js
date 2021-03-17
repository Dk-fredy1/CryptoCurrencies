const jwt = require('../helpers/util/jwt');
const { Users, Coins } = require('../driven-adapters/sequelize');
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

const addCoin = (user, coin) => user.addCoin(coin);

const getCoins = ({ username }) => Users.findOne({
  where: { username },
  include: {
    model: Coins,
    through: {
      attributes: []
    }
  }
});

module.exports = {
  createOne,
  getByUsername,
  generateToken,
  validateToken,
  addCoin,
  getCoins
};

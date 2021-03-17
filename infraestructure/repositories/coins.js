const { Coins } = require('../driven-adapters/sequelize');

const createOne = coinFields => Coins.create(coinFields);

const getCoin = where => Coins.findOne({
  where
});

module.exports = {
  createOne,
  getCoin
};

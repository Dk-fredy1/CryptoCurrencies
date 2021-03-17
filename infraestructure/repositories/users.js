const { Users } = require('../driven-adapters/sequelize');

const createOne = userFields => Users.create(userFields);

module.exports = {
  createOne
};

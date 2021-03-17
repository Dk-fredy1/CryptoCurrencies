const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Coins.belongsToMany(models.Users, { through: 'users_coins' });
    }
  }
  Coins.init({
    key: DataTypes.STRING,
    symbol: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coins'
  });
  return Coins;
};

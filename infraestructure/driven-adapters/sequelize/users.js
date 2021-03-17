/* eslint-disable no-param-reassign */
const crypto = require('crypto');
const {
  Model
} = require('sequelize');

const createHooks = User => {
  User.encryptPassword = plainText => crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .digest('hex');

  User.prototype.validatePassword = function validatePassword(enteredPassword) {
    const encryptPass = User.encryptPassword(enteredPassword);
    return encryptPass === this.password();
  };

  const setPassword = user => {
    if (user.changed('password')) {
      user.password = User.encryptPassword(user.password());
    }
  };

  User.beforeCreate(setPassword);
  User.beforeUpdate(setPassword);
};

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.belongsToMany(models.Coin, { through: 'users_coins' });
      createHooks(models.User);
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return () => this.getDataValue('password');
      }
    },
    currency: {
      type: DataTypes.ENUM('eur', 'usd', 'ars'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User'
  });

  return User;
};

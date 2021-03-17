/* eslint-disable no-param-reassign */
const crypto = require('crypto');
const {
  Model
} = require('sequelize');

const createHooks = Users => {
  Users.encryptPassword = plainText => crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .digest('hex');

  Users.prototype.validatePassword = function validatePassword(enteredPassword) {
    const encryptPass = Users.encryptPassword(enteredPassword);
    return encryptPass === this.password();
  };

  const setPassword = user => {
    if (user.changed('password')) {
      user.password = Users.encryptPassword(user.password());
    }
  };

  Users.beforeCreate(setPassword);
  Users.beforeUpdate(setPassword);
};

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Users.belongsToMany(models.Coins, { through: 'users_coins' });
      createHooks(models.Users);
    }
  }
  Users.init({
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
    modelName: 'Users'
  });

  return Users;
};

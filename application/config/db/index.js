const {
  username, password, database, host, dialect
} = require('../index').database;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect
  },
  test: {
    username,
    password,
    database,
    host,
    dialect
  },
  production: {
    username,
    password,
    database,
    host,
    dialect
  }
};

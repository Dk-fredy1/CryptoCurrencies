const session = require('./session');
const users = require('./users');
const coins = require('./coins');

module.exports = { ...session, ...users, ...coins };

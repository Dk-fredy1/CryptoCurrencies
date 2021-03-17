const { CURRENCY_DEFAULT } = require('../config/constants');

const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.unauthorized = message => ({
  internalCode: exports.UNAUTHORIZED,
  message
});

exports.DEFAULT_ERROR = 'DEFAULT_ERROR';
exports.SERVER_ERROR = 'SERVER_ERROR';
exports.SCHEMA_ERROR = 'SCHEMA_ERROR';
exports.UNAUTHORIZED = 'UNAUTHORIZED';
exports.BAD_REQUEST = 'BAD_REQUEST';
exports.NOT_FOUND = 'NOT_FOUND';
exports.DATABASE_ERROR = 'DATABASE_ERROR';

exports.badRequest = message => internalError(message, exports.BAD_REQUEST);
exports.schemaError = message => internalError(message, exports.SCHEMA_ERROR);
exports.typeError = ({ key, type }) => `The key ${key} must be ${type}`;
exports.keyNotExist = key => `The key ${key} must be exist`;
exports.invalidCurrency = currency => `The value "${currency}" is invalid, must be one of "${CURRENCY_DEFAULT.join(', ')}".`;
exports.serverError = message => internalError(message, exports.SERVER_ERROR);

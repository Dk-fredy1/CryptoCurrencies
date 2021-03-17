const { typeError, keyNotExist, invalidCurrency } = require('../../../application/errors');
const { CURRENCY_DEFAULT } = require('../../../application/config/constants');

exports.validateUsersCreateSchema = {
  firstName: {
    in: ['body'],
    isString: { errorMessage: typeError({ key: 'firstName', type: 'string' }) },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('firstName')
    }
  },
  lastName: {
    in: ['body'],
    isString: { errorMessage: typeError({ key: 'lastName', type: 'string' }) },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('lastName')
    }
  },
  username: {
    in: ['body'],
    isString: { errorMessage: typeError({ key: 'username', type: 'string' }) },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('username')
    }
  },
  password: {
    in: ['body'],
    isString: { errorMessage: typeError({ key: 'password', type: 'string' }) },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('password')
    }
  },
  currency: {
    in: ['body'],
    isString: { errorMessage: typeError({ key: 'currency', type: 'string' }) },
    trim: true,
    custom: {
      options: value => value && CURRENCY_DEFAULT.includes(value.toLowerCase()),
      errorMessage: value => invalidCurrency(value || 'empty value')
    },
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('currency')
    }
  }
};

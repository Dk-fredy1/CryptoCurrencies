const {
  typeError, keyNotExist, invalidOption, typeErrorCustom
} = require('../../../application/errors');
const { CURRENCY_DEFAULT, ORDERS } = require('../../../application/config/constants');

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
      errorMessage: value => invalidOption(value || 'empty value', CURRENCY_DEFAULT)
    },
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('currency')
    }
  }
};

exports.validateLoginSchema = {
  username: {
    in: ['body'],
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('username')
    }
  },
  password: {
    in: ['body'],
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('password')
    }
  }
};

exports.validateAddCoinSchema = {
  coinId: {
    in: ['params'],
    isString: { errorMessage: typeError({ key: 'coinId', type: 'string' }) },
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: keyNotExist('coinId')
    }
  }
};

exports.validateGetCoinsSchema = {
  top: {
    in: ['query'],
    trim: true,
    custom: {
      options: value => value && Number(value) && value > 0 && value <= 25,
      errorMessage: typeErrorCustom({ key: 'top', type: 'int', message: 'the number must be between 1 and 25' })
    }
  },
  order: {
    in: ['query'],
    isString: { errorMessage: typeError({ key: 'order', type: 'string' }) },
    trim: true,
    custom: {
      options: value => value && ORDERS.includes(value.toLowerCase()),
      errorMessage: value => invalidOption(value || 'empty value', ORDERS)
    },
    optional: { options: { nullable: true } }
  }
};

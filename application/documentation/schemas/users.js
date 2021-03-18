const {
  firstName,
  lastName,
  username,
  password,
  currency,
  coinId,
  currentPrice,
  imageUrl,
  datetime
} = require('./common');

const newUser = {
  firstName,
  lastName,
  username,
  password,
  currency
};

exports.topCoinsResponse = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      symbol: coinId,
      currentPrice: {
        type: 'object',
        properties: {
          ars: currentPrice,
          usd: currentPrice,
          eur: currentPrice
        }
      },
      name: coinId,
      image: imageUrl,
      lastUpdated: datetime
    }
  }
};

exports.newUser = {
  type: 'object',
  properties: newUser
};

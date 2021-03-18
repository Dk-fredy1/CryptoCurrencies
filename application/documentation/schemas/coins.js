const {
  coinId,
  currentPrice,
  imageUrl,
  datetime
} = require('./common');

exports.allCoinsResponse = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      symbol: coinId,
      currentPrice,
      name: coinId,
      image: imageUrl,
      lastUpdated: datetime
    }
  }
};

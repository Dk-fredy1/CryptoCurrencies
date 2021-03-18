const coinsRepository = require('../../repositories/coins');
const errors = require('../../../application/errors');
const coinService = require('../util/coins');
const { coinServiceMap } = require('../mappers/coins');
const { isEmpty } = require('../util/objects');

exports.checkCoinId = async (req, _, next) => {
  try {
    const { coinId } = req.params;
    req.coin = await coinsRepository.getCoin({ key: coinId });

    if (!req.coin) {
      const dataCoin = await coinService.getCoin(coinId);

      if (dataCoin.data && !isEmpty(dataCoin.data.market_data.current_price)) {
        req.coin = await coinsRepository.createOne(coinServiceMap(dataCoin.data));
      }
    }
    if (req.coin) {
      next();
    } else {
      next(errors.badRequest('The coin does not exist or has no current price'));
    }
  } catch (e) {
    next(errors.badRequest(e.name || 'bad request'));
  }
};

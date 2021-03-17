const coinsRepository = require('../../repositories/coins');
const errors = require('../../../application/errors');
const coinService = require('../util/coins');
const { coinServiceMap } = require('../mappers/coins');

exports.checkCoinId = async (req, _, next) => {
  try {
    const { coinId } = req.params;
    req.coin = await coinsRepository.getCoin({ key: coinId });

    if (!req.coin) {
      const dataCoin = await coinService.getCoin(coinId);
      if (dataCoin.data) {
        req.coin = await coinsRepository.createOne(coinServiceMap(dataCoin.data));
      }
    }

    if (req.coin) {
      next();
    } else {
      next(errors.unauthorized('Username or password incorrect'));
    }
  } catch (e) {
    next(errors.badRequest(e.name || 'bad request'));
  }
};

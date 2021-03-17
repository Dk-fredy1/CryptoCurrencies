const { Router } = require('express');
const { inspect } = require('util');
const { validateSchema } = require('../helpers/middlewares/schema_validator');
const { checkAuth } = require('../helpers/middlewares/auth');
const { checkCoinId } = require('../helpers/middlewares');
const { logger } = require('../../application/logger');
const { badRequest } = require('../../application/errors');
const { validateUsersCreateSchema, validateAddCoinSchema, validateGetCoinsSchema } = require('../helpers/schemas');
const userRepository = require('../repositories/users');
const coinService = require('../helpers/util/coins');
const { coinsTopServiceMap } = require('../helpers/mappers/coins');
const { orderArrayCurrency } = require('../helpers/util/objects');

const router = new Router();

router
  .route('')
  .post([validateSchema({ schema: validateUsersCreateSchema })], async (req, res, next) => {
    try {
      logger.info('Creating a user');
      await userRepository.createOne(req.body);
      res.status(201).send();
    } catch (e) {
      logger.error(`Error creating type ${inspect(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  });

router
  .route('/coins/:coinId')
  .post([
    validateSchema({ schema: validateAddCoinSchema }),
    checkAuth,
    checkCoinId
  ], async (req, res, next) => {
    try {
      logger.info('Associating currency to a user');
      await userRepository.addCoin(req.user, req.coin);
      res.status(201).send();
    } catch (e) {
      logger.error(`Error associating currency to a user ${inspect(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  });

router
  .route('/coins')
  .get([
    validateSchema({ schema: validateGetCoinsSchema }),
    checkAuth
  ], async (req, res, next) => {
    try {
      logger.info('Getting the top coins of a user');
      const { top, order } = req.query;
      const user = await userRepository.getCoins(req.user);

      if (user.Coins.length === 0) {
        throw badRequest('The user has no coins');
      }

      const coinsPromises = user.Coins.map(coin => coinService.getCoin(coin.key));
      const coins = (await Promise.all(coinsPromises)).map(coinsTopServiceMap);
      const topCoins = orderArrayCurrency(coins, top, order || 'desc', user.currency);
      res.status(200).send(topCoins);
    } catch (e) {
      logger.error(`Error getting the top coins of a user ${inspect(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  });

module.exports = router;

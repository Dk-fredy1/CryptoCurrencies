const { Router } = require('express');
const { inspect } = require('util');
const { logger } = require('../../application/logger');
const { badRequest } = require('../../application/errors');
const { checkAuth } = require('../helpers/middlewares/auth');
const { coinsMap } = require('../helpers/mappers/coins');
const coinService = require('../helpers/util/coins');

const router = new Router();

router
  .route('')
  .get([checkAuth], async (req, res, next) => {
    try {
      logger.info('Getting all available currencies');
      const { currency } = req.user;
      let coins = [];
      let coinsPage = {};
      let page = 1;
      do {
        // eslint-disable-next-line no-await-in-loop
        coinsPage = await coinService.getAll({ currency, page });
        logger.info(`page ${inspect(page)}`);
        page += 1;
        coins = coins.concat(coinsPage.data);
      } while (coinsPage.data.length !== 0);

      const coinsReponse = coins.map(coinsMap);
      res.status(200).send({ data: coinsReponse });
    } catch (e) {
      logger.error(`Error get all currencies ${inspect(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  });

module.exports = router;

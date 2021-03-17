const { Router } = require('express');
const { inspect } = require('util');
const { validateSchema } = require('../helpers/middlewares/schema_validator');
const { checkAuth } = require('../helpers/middlewares/auth');
const { checkCoinId } = require('../helpers/middlewares');
const { logger } = require('../../application/logger');
const { badRequest } = require('../../application/errors');
const { validateUsersCreateSchema, validateAddCoinSchema } = require('../helpers/schemas');
const userRepository = require('../repositories/users');

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
      next(badRequest(e.name || 'bad request'));
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
      next(badRequest(e.name || 'bad request'));
    }
  });

module.exports = router;

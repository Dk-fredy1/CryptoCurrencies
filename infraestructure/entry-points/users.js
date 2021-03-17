const { Router } = require('express');
const { inspect } = require('util');
const { validateSchema } = require('../helpers/middlewares/schema_validator');
const { logger } = require('../../application/logger');
const { badRequest } = require('../../application/errors');
const { validateUsersCreateSchema } = require('../helpers/schemas');
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

module.exports = router;

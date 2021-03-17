const { Router } = require('express');
const { inspect } = require('util');
const { validateSchema } = require('../helpers/middlewares/schema_validator');
const { checkUser } = require('../helpers/middlewares/auth');
const { logger } = require('../../application/logger');
const { badRequest } = require('../../application/errors');
const { validateLoginSchema } = require('../helpers/schemas');
const userRepository = require('../repositories/users');

const router = new Router();

router
  .route('/login')
  .post([validateSchema({ schema: validateLoginSchema }), checkUser], (req, res, next) => {
    try {
      logger.info('logged in user');
      const token = userRepository.generateToken(req.user);
      res.status(200).send({ token });
    } catch (e) {
      logger.error(`Error creating type ${inspect(e)}`);
      next(badRequest(e.message || 'bad request'));
    }
  });

module.exports = router;

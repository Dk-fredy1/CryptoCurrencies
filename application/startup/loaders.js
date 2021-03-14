const { inspect } = require('util');

const { expressMiddleware, expressRequestIdMiddleware } = require('express-wolox-logger');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const helmet = require('helmet');

const routes = require('../../infraestructure/entry-points');
const errors = require('../../infraestructure/helpers/middlewares/errors');
const documentation = require('../documentation');
const { logger } = require('../logger');

module.exports = {
  start: (app, config) => {
    logger.info('Starting loaders...');

    try {
      app.use(helmet());
      app.use(helmet.permittedCrossDomainPolicies());
      app.use(helmet.noSniff());
      app.use(helmet.frameguard());
      app.use(
        helmet.hsts({
          maxAge: 31536000
        })
      );
      app.use(helmet.hidePoweredBy());
      app.use((req, res, next) => {
        res.removeHeader('Server');
        res.removeHeader('Via');
        res.setHeader('Pragma', 'no-cache');
        next();
      });
      app.use(bodyParser.json());
      app.use(expressRequestIdMiddleware());
      app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentation));

      if (!config.isTesting) app.use(expressMiddleware({ loggerFn: logger.info }));

      routes.init(app);

      app.use(errors.handle);
    } catch (err) {
      logger.error(`Fail to start loaders because: ${inspect(err)}`);
      throw err;
    }

    logger.info('Finish loaders');
  }
};

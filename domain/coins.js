const { inspect } = require('util');
const config = require('../application/config');
const { logger } = require('../application/logger');
const { allCoinsSz } = require('../infraestructure/helpers/serializers/coins');

const serviceUrl = config.api.baseUrl;

exports.getAll = (params, requestFn, errors) => requestFn({
  url: serviceUrl,
  path: '/coins/markets',
  method: 'get',
  params: allCoinsSz(params)
}).catch(e => {
  logger.error(`Error while querying service coingecko with params ${inspect(params)}`);
  logger.error(`Error: ${inspect(e)}`);
  throw errors.serverError();
});

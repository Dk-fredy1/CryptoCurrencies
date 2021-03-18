const { port } = require('../config');
const paths = require('./paths');
const schemas = require('./schemas');
const parameters = require('./parameters');

module.exports = {
  openapi: '3.0.3',
  info: {
    version: '1.0.0',
    title: 'Crypto Currencies',
    description: 'Wrapper of CoinGecko',
    contact: {
      name: 'Jhon Vasquez',
      email: 'jhonfvs852@gmail.com'
    }
  },
  servers: [
    {
      url: `http://localhost:${port}/`,
      description: 'Local server'
    }
  ],
  security: [],
  tags: [
    {
      name: 'Session',
      description: 'Endpoint for session'
    },
    {
      name: 'Users',
      description: 'Endpoint for users'
    },
    {
      name: 'Coins',
      description: 'Endpoint for coins'
    }
  ],
  paths,
  components: {
    schemas,
    parameters,
    securitySchemes: {
      bearer: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
};

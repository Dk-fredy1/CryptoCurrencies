const convict = require('convict');

const configSchema = require('./schema');
const { removeObjectUndefined, assignObject } = require('../../infraestructure/helpers/util/objects');
require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV;
const configFile = `./${ENVIRONMENT}/`;
// eslint-disable-next-line import/no-dynamic-require
const customConfig = require(configFile).config;

const loadConfig = configLoad => {
  const sanitizedConfig = removeObjectUndefined(configLoad);
  const convictConfig = convict(configSchema);
  convictConfig.load(sanitizedConfig).validate();
  return convictConfig.getProperties();
};

const config = {
  environment: process.env.ENVIRONMENT,
  port: process.env.PORT,
  api: {
    baseUrl: process.env.COIN_BASE_URL
  },
  database: {
    username: process.env.DB_USERNAMEDB,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  auth: {
    secret: process.env.JWT_SECRET,
    algorithms: [process.env.JWT_ALGORITHM]
  }
};

const environmentConfig = assignObject(customConfig, config);

module.exports = loadConfig(environmentConfig);

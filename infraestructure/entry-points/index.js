const sessionRoute = require('./session');
const healthRoute = require('./health');
const usersRpute = require('./users');
const coinsRoute = require('./coins');

const apiPathVersion = '/api/v1';

exports.init = app => {
  app.use(`${apiPathVersion}/health`, healthRoute);
  app.use(`${apiPathVersion}/users`, usersRpute);
  app.use(`${apiPathVersion}/coins`, coinsRoute);
  app.use(`${apiPathVersion}`, sessionRoute);
  app.all('*', (_req, res) => res.status(404).send({ data: 'Not Found.' }));
};

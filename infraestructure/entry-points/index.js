const healthRoute = require('./health');
const usersRpute = require('./users');

const apiPathVersion = '/api/v1';

exports.init = app => {
  app.use(`${apiPathVersion}/health`, healthRoute);
  app.use(`${apiPathVersion}/users`, usersRpute);
  app.all('*', (_req, res) => res.status(404).send({ data: 'Not Found.' }));
};

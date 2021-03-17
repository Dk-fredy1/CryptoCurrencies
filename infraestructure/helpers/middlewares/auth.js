const userRepository = require('../../repositories/users');
const errors = require('../../../application/errors');

exports.checkUser = async (req, _, next) => {
  try {
    const user = await userRepository.getByUsername(req.body.username);

    if (user && user.validatePassword(req.body.password)) {
      req.user = user;
      next();
    } else {
      next(errors.unauthorized('Username or password incorrect'));
    }
  } catch (e) {
    next(errors.badRequest(e.name || 'bad request'));
  }
};

exports.checkAuth = async (req, _, next) => {
  try {
    let flag = false;
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
      const token = bearerToken.split(' ')[1];
      const payloadtoken = userRepository.validateToken(token);

      if (payloadtoken) {
        flag = true;
        req.user = await userRepository.getByUsername(payloadtoken.username);
        next();
      }
    }
    if (!flag) next(errors.unauthorized(errors.UNAUTHORIZED));
  } catch (e) {
    next(errors.badRequest(e.name || 'bad request'));
  }
};

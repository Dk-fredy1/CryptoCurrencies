exports.middlewareTester = async (req, res, middlewares, callback) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < middlewares.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await middlewares[i](req, res, callback);
  }
};

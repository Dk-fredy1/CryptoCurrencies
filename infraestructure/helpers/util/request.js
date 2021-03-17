const axios = require('axios');
const https = require('https');

const buildRequest = ({
  url, path, method, headers, data, params
}) => {
  const defaultOptions = {
    method,
    url: `${url}${path}`,
    headers,
    data,
    params,
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  };
  return defaultOptions;
};

exports.request = options => axios(buildRequest(options));

const coins = require('../../../domain/coins');
const errors = require('../../../application/errors');
const { request } = require('./request');

exports.getAll = params => coins.getAll(params, request, errors);

exports.getCoin = id => coins.getCoin(id, request, errors);

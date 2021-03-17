const allCoinsSz = params => ({
  vs_currency: params.currency,
  ids: params.ids || '',
  order: 'market_cap_desc',
  per_page: '250',
  page: params.page,
  sparkline: false
});

module.exports = {
  allCoinsSz
};

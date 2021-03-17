const coinsMap = coin => ({
  id: coin.id,
  symbol: coin.symbol,
  currentPrice: coin.current_price,
  name: coin.name,
  image: coin.image,
  lastUpdated: coin.last_updated
});

const coinServiceMap = coin => ({
  key: coin.id,
  symbol: coin.symbol,
  name: coin.name
});

module.exports = {
  coinsMap,
  coinServiceMap
};

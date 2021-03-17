const coinsMap = coin => ({
  id: coin.id,
  symbol: coin.symbol,
  currentPrice: coin.current_price,
  name: coin.name,
  image: coin.image,
  lastUpdated: coin.last_updated
});

module.exports = {
  coinsMap
};

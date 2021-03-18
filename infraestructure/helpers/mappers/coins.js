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

const coinsTopServiceMap = coin => ({
  symbol: coin.data.symbol,
  currentPrice: {
    ars: coin.data.market_data.current_price.ars,
    usd: coin.data.market_data.current_price.usd,
    eur: coin.data.market_data.current_price.eur
  },
  name: coin.data.name,
  image: coin.data.image.thumb,
  lastUpdated: coin.data.last_updated
});

module.exports = {
  coinsMap,
  coinServiceMap,
  coinsTopServiceMap
};

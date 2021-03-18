exports.allCoins = {
  data: [
    {
      id: 'bitcoin',
      symbol: 'btc',
      currentPrice: 3216545,
      name: 'Bitcoin',
      image: 'http://urlimage.com/21313215445.png',
      last_updated: '2021-03-17T20:14:55.700Z'
    },
    {
      id: 'ethereum',
      symbol: 'eth',
      currentPrice: 89746522,
      name: 'Ethereum',
      image: 'http://urlimage.com/98765161853.png',
      last_updated: '2021-03-17T20:14:55.700Z'
    },
    {
      id: 'tether',
      symbol: 'usdt',
      currentPrice: 21,
      name: 'Tether',
      image: 'http://urlimage.com/3214544555.png',
      last_updated: '2021-03-17T20:14:55.700Z'
    }
  ]
};

exports.coin = {
  data: {
    id: 'bitcoin',
    symbol: 'btc',
    market_data: {
      current_price: {
        ars: 321536547,
        usd: 654682,
        aur: 5634851
      }
    },
    name: 'Bitcoin',
    image: 'http://urlimage.com/21313215445.png',
    last_updated: '2021-03-17T20:14:55.700Z'
  }
};

exports.multipleCoins = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    currentPrice: {
      ars: 321536547,
      usd: 654682,
      aur: 5634851
    },
    name: 'Bitcoin',
    image: 'http://urlimage.com/21313215445.png',
    last_updated: '2021-03-17T20:14:55.700Z'
  },
  {
    id: 'gridcoin-research',
    symbol: 'grc',
    currentPrice: {
      ars: 365,
      usd: 3225,
      aur: 741
    },
    name: 'Gridcoin',
    image: 'http://urlimage.com/36651515.png',
    last_updated: '2021-03-17T20:14:55.700Z'
  },
  {
    id: 'utrust',
    symbol: 'utk',
    currentPrice: {
      ars: 3655,
      usd: 251478,
      aur: 87787
    },
    name: 'UTRUST',
    image: 'http://urlimage.com/21313215445.png',
    last_updated: '2021-03-17T20:14:55.700Z'
  },
  {
    id: 'aelf',
    symbol: 'elf',
    currentPrice: {
      ars: 1,
      usd: 2,
      aur: 3
    },
    name: 'elf',
    image: 'http://urlimage.com/21313215445.png',
    last_updated: '2021-03-17T20:14:55.700Z'
  },
  {
    id: 'zencash',
    symbol: 'zen',
    currentPrice: {
      ars: 8521,
      usd: 96541,
      aur: 3654
    },
    name: 'Horizen',
    image: 'http://urlimage.com/21313215445.png',
    last_updated: '2021-03-17T20:14:55.700Z'
  }
];

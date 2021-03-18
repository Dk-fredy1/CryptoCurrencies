const objects = require('./objects');
const { multipleCoins } = require('../../../test/mocks/coins');

const responseOrderDesc = [
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
  }
];

const responseOrderAsc = [
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
  }
];

describe('Objects', () => {
  it('must succeed when the order of the arrangement is descending', async () => {
    const arrOrder = objects.orderArrayCurrency(multipleCoins, 3, 'desc', 'ars');
    expect(arrOrder).toEqual(responseOrderDesc);
  });
  it('must succeed when the order of the arrangement is ascending', async () => {
    const arrOrder = objects.orderArrayCurrency(multipleCoins, 3, 'asc', 'ars');
    expect(arrOrder).toEqual(responseOrderAsc);
  });
});

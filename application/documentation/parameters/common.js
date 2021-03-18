module.exports = {
  coinId: {
    name: 'coinId',
    in: 'path',
    description: 'Id of the currency to add to the user',
    schema: {
      $ref: '#/components/schemas/coinId'
    },
    required: true
  },
  top: {
    name: 'top',
    in: 'query',
    description: 'Upper limit of coins',
    schema: {
      $ref: '#/components/schemas/top'
    },
    required: true
  },
  order: {
    name: 'order',
    in: 'query',
    description: 'Method to sort the results, by default descending',
    schema: {
      $ref: '#/components/schemas/order'
    }
  }
};

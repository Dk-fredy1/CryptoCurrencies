module.exports = {
  '/api/v1/coins': {
    get: {
      tags: ['Coins'],
      summary: 'get all available coins',
      security: [
        {
          bearer: []
        }
      ],
      responses: {
        200: {
          description: 'Return all available coins',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/allCoinsResponse'
              }
            }
          }
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/badRequestResponse'
              }
            }
          }
        }
      }
    }
  }
};

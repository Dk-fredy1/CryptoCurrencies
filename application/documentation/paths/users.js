module.exports = {
  '/api/v1/users': {
    post: {
      tags: ['Users'],
      summary: 'Create a users',
      requestBody: {
        description: 'Users creation body',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/newUser'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Create user successful'
        },
        422: {
          description: 'Wrong Query',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/schemaErrorResponse'
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
  },
  '/api/v1/users/coins/{coinId}': {
    post: {
      tags: ['Users'],
      summary: 'Assign a coin to a user',
      security: [
        {
          bearer: []
        }
      ],
      parameters: [
        { $ref: '#/components/parameters/coinId' }
      ],
      responses: {
        200: {
          description: 'Associated currency to user successful'
        },
        422: {
          description: 'Wrong Query',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/schemaErrorResponse'
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
  },
  '/api/v1/users/coins': {
    get: {
      tags: ['Users'],
      summary: 'Get the top N (max 25) coins associated with a user',
      security: [
        {
          bearer: []
        }
      ],
      parameters: [
        { $ref: '#/components/parameters/top' },
        { $ref: '#/components/parameters/order' }
      ],
      responses: {
        200: {
          description: 'Top N coins associated with a user',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/topCoinsResponse'
              }
            }
          }
        },
        422: {
          description: 'Wrong Query',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/schemaErrorResponse'
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

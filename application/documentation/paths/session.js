module.exports = {
  '/api/v1/login': {
    post: {
      tags: ['Session'],
      summary: 'Login user to get a token',
      requestBody: {
        description: 'Users creation body',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/login'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Login successful',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/loginResponse'
              }
            }
          }
        },
        401: {
          description: 'Unauthorized',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/unauthorizedResponse'
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

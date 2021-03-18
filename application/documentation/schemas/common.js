exports.datetime = {
  type: 'string',
  example: 'YYYY-MM-DDTHH:MM:SS.mm'
};

exports.imageUrl = {
  type: 'string',
  example: 'https://example.com/images/example_image_1.png'
};

exports.currentPrice = {
  type: 'integer',
  example: 21547
};

exports.top = {
  type: 'integer',
  minimum: 1,
  maximum: 25
};

exports.order = {
  type: 'string',
  enum: ['asc', 'desc']
};

exports.coinId = {
  type: 'string',
  example: 'bitcoin'
};

exports.currency = {
  type: 'string',
  example: 'usd'
};

exports.lastName = {
  type: 'string',
  example: 'lastname'
};

exports.firstName = {
  type: 'string',
  example: 'firstname'
};

exports.password = {
  type: 'string',
  example: 'Password123'
};

exports.username = {
  type: 'string',
  example: 'username'
};

exports.location_body = {
  type: 'string',
  example: 'body',
  required: false
};

exports.title = {
  type: 'string',
  example: 'title'
};

exports.internal_code = {
  type: 'string',
  example: 'SCHEMA_ERROR',
  required: false
};

exports.error_msg = {
  type: 'string',
  example: 'There is an error ...',
  required: false
};

exports.token = {
  type: 'string',
  example:
    'eyJhFGADSGsfghAGFASedgffsGDSFg.eyJHFGHfgHFGHSfhgshan.HtJRTJFGhFGfsd_WQeghgdfjghFDGd_FGWEFasdc'
};

const schemaError = example => ({
  type: 'object',
  properties: {
    message: exports.error_msg,
    internal_code: {
      ...exports.internal_code,
      example
    }
  }
});

exports.schemaErrorResponse = {
  type: 'object',
  properties: {
    message: {
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              msg: exports.error_msg,
              param: exports.title,
              location: exports.location_body
            }
          }
        }
      }
    },
    internal_code: exports.internal_code
  }
};

exports.badRequestResponse = schemaError('BAD_REQUEST');

exports.unauthorizedResponse = schemaError('UNAUTHORIZED');

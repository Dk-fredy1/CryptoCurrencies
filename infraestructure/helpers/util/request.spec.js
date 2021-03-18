jest.mock('axios');
const request = require('axios');
const requestFn = require('./request');

describe('Request Util', () => {
  describe('Should call the request function when request method is called', () => {
    beforeAll(() => {
      request.mockReturnValue({});
      requestFn.request({});
    });
    afterAll(() => {
      request.mockClear();
      request.mockReset();
    });
    it('Success function call', () => {
      expect(request).toHaveBeenCalledTimes(1);
    });
  });
});

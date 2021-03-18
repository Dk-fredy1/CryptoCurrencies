const { getAll, getCoin } = require('./coins');
const { allCoins, coin } = require('../test/mocks/coins');
const errors = require('../application/errors');

describe('Coins service', () => {
  describe('Request successfully to get all coins', () => {
    let response = {};
    const requestFnMock = jest.fn().mockResolvedValueOnce(allCoins);
    beforeAll(() => {
      const params = {
        page: 1,
        currency: 'usd'
      };
      return getAll(params, requestFnMock, errors).then(resp => {
        response = resp;
      });
    });
    afterAll(() => {
      requestFnMock.mockReset();
      requestFnMock.mockClear();
    });
    it('Successfully response with coins', () => {
      expect(response.data.length).toBe(3);
    });
  });
  describe('Request no successfully to get all coins', () => {
    let error = {};
    const requestFnMock = jest.fn().mockRejectedValueOnce({
      error: {
        message: ['Error description'],
        internal_code: 'SERVER_ERROR'
      }
    });
    beforeAll(() => {
      const params = {
        page: 1,
        currency: 'usd'
      };
      return getAll(params, requestFnMock, errors).catch(e => {
        error = e;
      });
    });
    afterAll(() => {
      requestFnMock.mockReset();
      requestFnMock.mockClear();
    });
    it('Unsuccessfully response with SERVER_ERROR internal code', () => {
      expect(error.internalCode).toBe('SERVER_ERROR');
    });
  });
  describe('Request successfully to get coin', () => {
    let response = {};
    const requestFnMock = jest.fn().mockResolvedValueOnce(coin);
    beforeAll(() => getCoin('bitcoin', requestFnMock, errors).then(resp => {
      response = resp;
    }));
    afterAll(() => {
      requestFnMock.mockReset();
      requestFnMock.mockClear();
    });
    it('Successfully response with coin', () => {
      expect(response).toEqual(coin);
    });
  });
  describe('Request no successfully to get coin', () => {
    let error = {};
    const requestFnMock = jest.fn().mockRejectedValueOnce({
      error: {
        message: ['Error description'],
        internal_code: 'SERVER_ERROR'
      }
    });
    beforeAll(() => getCoin('bitcoin', requestFnMock, errors).catch(e => {
      error = e;
    }));
    afterAll(() => {
      requestFnMock.mockReset();
      requestFnMock.mockClear();
    });
    it('Unsuccessfully response with SERVER_ERROR internal code', () => {
      expect(error.internalCode).toBe('SERVER_ERROR');
    });
  });
});

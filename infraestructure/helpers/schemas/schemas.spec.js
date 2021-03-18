const { checkSchema, validationResult } = require('express-validator');
const { user } = require('../../../test/mocks/users');
const { middlewareTester } = require('../../../test/utils');
const { validateLoginSchema, validateUsersCreateSchema, validateGetCoinsSchema } = require('./index');

const buildRequest = body => ({
  body
});

const buildGetQuery = (top, order) => ({
  query: {
    top,
    order
  }
});

describe('Schemas', () => {
  describe('Session', () => {
    describe('Post login', () => {
      it('should be fail without body in request', async () => {
        const req = {};
        await middlewareTester(req, null, checkSchema(validateLoginSchema), () => undefined);
        const errors = validationResult(req).array();
        expect(errors.length).toBe(4);
        expect(errors[0].msg).toBe('The key username must be string');
        expect(errors[1].msg).toBe('The key username must be exist');
        expect(errors[2].msg).toBe('The key password must be string');
        expect(errors[3].msg).toBe('The key password must be exist');
      });
      it('should be success when body has correct values', async () => {
        const req = buildRequest(user);
        await middlewareTester(req, null, checkSchema(validateLoginSchema), () => undefined);
        const errors = validationResult(req).array();
        expect(errors.length).toBe(0);
      });
    });
  });
  describe('User', () => {
    describe('Create user', () => {
      it('should be fail without body in request', async () => {
        const req = {};
        await middlewareTester(req, null, checkSchema(validateUsersCreateSchema), () => undefined);
        const errors = validationResult(req).array();
        expect(errors.length).toBe(11);
        expect(errors[0].msg).toBe('The key firstName must be string');
        expect(errors[1].msg).toBe('The key firstName must be exist');
        expect(errors[2].msg).toBe('The key lastName must be string');
        expect(errors[3].msg).toBe('The key lastName must be exist');
      });
      it('should be success when body has correct values', async () => {
        const req = buildRequest(user);
        await middlewareTester(req, null, checkSchema(validateUsersCreateSchema), () => undefined);
        const errors = validationResult(req).array();
        expect(errors.length).toBe(0);
      });
    });
    describe('Top N user', () => {
      it('should be fail without body in request', async () => {
        const req = {};
        await middlewareTester(req, null, checkSchema(validateGetCoinsSchema), () => undefined);
        const errors = validationResult(req).array();
        expect(errors.length).toBe(1);
        expect(errors[0].msg).toBe('The key top must be int or the number must be between 1 and 25');
      });
      it('should be fail with wrong order', async () => {
        const req = buildGetQuery(1, 'test');
        await middlewareTester(req, null, checkSchema(validateGetCoinsSchema), () => undefined);
        const errors = validationResult(req).array();
        expect(errors.length).toBe(1);
        expect(errors[0].msg).toBe('The value "test" is invalid, must be one of "asc, desc".');
      });
      it('should be success when body has correct values', async () => {
        const req = buildGetQuery(1, 'asc');
        await middlewareTester(req, null, checkSchema(validateGetCoinsSchema), () => undefined);
        const errors = validationResult(req).array();
        expect(errors.length).toBe(0);
      });
    });
  });
});

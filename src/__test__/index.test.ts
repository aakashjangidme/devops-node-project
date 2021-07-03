import app from '../app';
import request from 'supertest';

describe('Testing the movies API', () => {
  it('tests our testing framework if it works', () => {
    expect(2).toBe(2);
  });
});

describe('GET /', () => {
  test('should return hello world & statusCode of 200', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual('Hello World');
  });
});

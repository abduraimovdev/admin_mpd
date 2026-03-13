const request = require('supertest');
const app = require('../src/app');

describe('Admin MPD Routes', () => {
  test('GET / redirects to /dashboard', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(302);
    expect(res.headers.location).toBe('/dashboard');
  });

  test('GET /dashboard returns 200', async () => {
    const res = await request(app).get('/dashboard');
    expect(res.status).toBe(200);
  });

  test('GET /unknown returns 404', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.status).toBe(404);
  });
});

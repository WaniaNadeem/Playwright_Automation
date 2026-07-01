import { test, expect } from '@playwright/test';

test('GET /objects/1 returns a valid object payload', async ({ request }) => {
  const response = await request.get('https://api.restful-api.dev/objects/1');

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body).toHaveProperty('id', '1');
  expect(body).toHaveProperty('name');
  expect(typeof body.name).toBe('string');
});

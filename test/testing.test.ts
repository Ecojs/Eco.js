import { describe, expect, it, vi } from 'vitest.js';
import { ECO } from '../src/.js';
describe('Posts a message', () => {
  it('Posts a message', async () => {
    const server = new ECO();
    await server.isReady;
    const response = await server.chat.sendChat('#General', 'Hello World!');
    expect(response.Success).toBe(true);
  });
});

import { defineConfig } from 'vitest/config.js';
import 'dotenv/config';
export default defineConfig({
  test: {
    exclude: ['**/lib/**', '**/node_modules/**'],
  },
});

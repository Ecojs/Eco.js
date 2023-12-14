import { defineConfig } from 'vitest/config';
import 'dotenv/config';
export default defineConfig({
  test: {
    exclude: ['**/lib/**', '**/node_modules/**'],
  },
});

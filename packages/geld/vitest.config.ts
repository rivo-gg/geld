import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/geld/test/*.test.{js,ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      reportsDirectory: './coverage'
    },
  },
}); 

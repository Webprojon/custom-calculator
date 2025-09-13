export default {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }],
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^(\\.{1,2}/.*)\\.ts$': '$1',
  },
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts',
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
    '!src/**/*.test.{ts,js}',
    '!src/**/*.spec.{ts,js}',
  ],
  extensionsToTreatAsEsm: ['.ts'],
};

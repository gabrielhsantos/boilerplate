const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/core/domain/useCases/**/*UseCase.ts'
  ],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: [
    'json',
    'lcov'
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
  preset: '@shelf/jest-mongodb',
  setupFiles: ['<rootDir>__tests__/testSetup.ts'],
  testEnvironment: "node",
  testMatch: [
    '<rootDir>__tests__/**/*.spec.ts'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  watchPathIgnorePatterns: ['globalConfig'],
}
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/core/domain/useCases/**/*UseCase.ts'
  ],
  coveragePathIgnorePatterns: ['index.ts'],
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: [
    "**/src/providers/**/*.test.js?(x)",
    "**/src/core/domain/useCases/**/*.test.js?(x)",
  ],
}
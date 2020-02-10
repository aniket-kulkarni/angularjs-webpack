module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setup.test.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^(?!.*\\.(js|json)$)': '<rootDir>/jest/fileTransform.js'
  },
  testMatch: ['<rootDir>/src/**/__tests__/**/?(*.)+(spec|test).js'],
  moduleFileExtensions: ['js', 'json'],

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/**/*.mock.js',
    '!<rootDir>/src/**/*.spec.js',
    '!<rootDir>/src/**/*.test.js'
  ],
  modulePathIgnorePatterns: ['dist/'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './test-reports',
        filename: 'report.html'
      }
    ]
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/test-reports/coverage',
  coverageReporters: ['json', 'text', 'lcov', 'clover']
  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // }
};

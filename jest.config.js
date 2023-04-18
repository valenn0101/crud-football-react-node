module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  coverageDirectory: '../coverage/',
  testPathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css',
  },
};

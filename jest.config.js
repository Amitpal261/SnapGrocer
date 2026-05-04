/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",

  // ✅ ADD THIS BLOCK
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};

module.exports = config;
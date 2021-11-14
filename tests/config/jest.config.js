module.exports = {
  collectCoverage: true,
  rootDir: "../../",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/tests"],
  preset: "@shelf/jest-mongodb",
  setupFiles: ["<rootDir>/tests/config/test-setup.js"],
  coverageDirectory: "<rootDir>/tests/config/coverage/",
  testTimeout: 400000,
  reporters: ["default"],
  testResultsProcessor: "jest-sonar-reporter",
  coverageReporters: ["json", "lcov", "text-summary", "cobertura", "html-spa"],
};

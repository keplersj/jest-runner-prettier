module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "text"],
  projects: [
    "<rootDir>/jest-prettier.config.js",
    "<rootDir>/jest-test.config.js"
  ]
};

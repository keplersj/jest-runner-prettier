module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "text"],
  projects: [
    {
      collectCoverage: true,
      coverageReporters: ["json", "text"],
      displayName: "test:jest"
    },
    {
      preset: "./jest-preset.js",
      runner: "./src/index.js",
      displayName: "lint:prettier",
      testPathIgnorePatterns: [
        "/node_modules/",
        "/src/__fixtures__/",
        "/coverage/"
      ]
    }
  ]
};

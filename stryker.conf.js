const path = require("path");

module.exports = function (config) {
  config.set({
    mutate: [
      "src/**/*.js",
      "!src/**/*@(.test|.spec|Spec).js",
      "!src/__fixtures__/**/*.ts",
    ],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    jest: {
      projectType: "custom",
      // Only use the unit test project
      config: require(path.resolve(__dirname, "./jest.config.js")).projects[0],
      enableFindRelatedTests: true,
    },
  });
};

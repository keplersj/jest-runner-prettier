export default {
  collectCoverage: true,
  coverageReporters: ["json", "text"],
  projects: [
    {
      preset: "ts-jest/presets/default-esm",
      globals: {
        "ts-jest": {
          useESM: true,
        },
      },
      moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
      },
      collectCoverage: true,
      testPathIgnorePatterns: ["/node_modules/", "/dist/"],
      coverageReporters: ["json", "text"],
      displayName: "test",
    },
    {
      preset: "./jest-preset.js",
      runner: "./dist/index.js",
      displayName: "lint:prettier",
      testPathIgnorePatterns: [
        "/node_modules/",
        "/src/__fixtures__/",
        "/coverage/",
        "/dist/",
      ],
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      testMatch: ["<rootDir>/src/**/*.ts"],
    },
  ],
};

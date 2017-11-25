module.exports = {
  runner: "./src/index.js",
  displayName: "lint:prettier",
  testMatch: [
    "**/*.js",
    "**/*.jsx",
    "**/*.json",
    "**/*.ts",
    "**/*.tsx",
    "**/*.css",
    "**/*.less",
    "**/*.scss",
    "**/*.graphql",
    "**/*.md",
    "**/*.markdown"
  ],
  testPathIgnorePatterns: ["/node_modules/", "/src/__fixtures__/", "/coverage/"]
};

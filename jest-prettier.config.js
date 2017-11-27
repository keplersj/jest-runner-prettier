module.exports = {
  runner: "./src/index.js",
  displayName: "lint:prettier",
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx",
    "css",
    "less",
    "scss",
    "graphql",
    "md",
    "markdown"
  ],
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

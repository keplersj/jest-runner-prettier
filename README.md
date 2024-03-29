[![npm](https://img.shields.io/npm/v/jest-runner-prettier)](https://www.npmjs.com/package/jest-runner-prettier)
[![npm](https://img.shields.io/npm/dw/jest-runner-prettier)](https://www.npmjs.com/package/jest-runner-prettier)
[![Codecov](https://img.shields.io/codecov/c/github/keplersj/jest-runner-prettier)](https://app.codecov.io/gh/keplersj/jest-runner-prettier)
[![Bundle Size](https://img.shields.io/bundlephobia/min/jest-runner-prettier)](https://bundlephobia.com/package/jest-runner-prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/)
[![Mentioned in Awesome Jest](https://awesome.re/mentioned-badge.svg)](https://github.com/jest-community/awesome-jest)

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <img width="150" height="150" src="https://github.com/prettier/prettier-logo/raw/master/images/prettier-icon-light.png">
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="https://user-images.githubusercontent.com/2440089/37489554-6f776bd2-286e-11e8-862f-cb6c398cf752.png">
  </a>
  <h1>jest-runner-prettier</h1>
  <p>Prettier runner for Jest</p>
</div>

<div align="center">
  <!--<img src="https://user-images.githubusercontent.com/574806/30197438-9681385c-941c-11e7-80a8-2b11f15bd412.gif">-->
  <!-- TODO: Create GIF showing off runner -->
</div>

## Usage

### Install

Install `jest`, `prettier` and `jest-runner-prettier`

```bash
yarn add --dev jest prettier jest-runner-prettier

# or with NPM

npm install --save-dev jest prettier jest-runner-prettier
```

### Add it to your Jest config

#### Using Built-in Preset

This package includes a [Jest preset](https://jestjs.io/docs/en/configuration#preset-string) which configures Jest to run Prettier on all files supported by Prettier. To use it set the following in your `package.json`:

```json
{
  "jest": {
    "preset": "jest-runner-prettier"
  }
}
```

or `jest.config.js`:

```js
module.exports = {
  preset: "jest-runner-prettier",
};
```

#### Manually

In your `package.json`

```json
{
  "jest": {
    "runner": "prettier",
    "moduleFileExtensions": [
      "js",
      "mjs",
      "jsx",
      "vue",
      "ts",
      "tsx",
      "css",
      "less",
      "scss",
      "html",
      "json",
      "graphql",
      "md",
      "markdown",
      "mdx",
      "yaml",
      "yml"
    ],
    "testMatch": [
      "**/*.js",
      "**/*.mjs",
      "**/*.jsx",
      "**/*.vue",
      "**/*.ts",
      "**/*.tsx",
      "**/*.css",
      "**/*.less",
      "**/*.scss",
      "**/*.html",
      "**/*.json",
      "**/*.graphql",
      "**/*.md",
      "**/*.markdown",
      "**/*.mdx",
      "**/*.yaml",
      "**/*.yml"
    ]
  }
}
```

Or in `jest.config.js`

```js
module.exports = {
  runner: "prettier",
  moduleFileExtensions: [
    "js",
    "mjs",
    "jsx",
    "vue",
    "ts",
    "tsx",
    "css",
    "less",
    "scss",
    "html",
    "json",
    "graphql",
    "md",
    "markdown",
    "mdx",
    "yaml",
    "yml",
  ],
  testMatch: [
    "**/*.js",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.vue",
    "**/*.ts",
    "**/*.tsx",
    "**/*.css",
    "**/*.less",
    "**/*.scss",
    "**/*.html",
    "**/*.json",
    "**/*.graphql",
    "**/*.md",
    "**/*.markdown",
    "**/*.mdx",
    "**/*.yaml",
    "**/*.yml",
  ],
};
```

### Run Jest

```bash
npx jest

# or, with yarn

yarn jest
```

## License

Copyright [Kepler Sticka-Jones](https://keplersj.com) 2017-2022. Licensed MIT.

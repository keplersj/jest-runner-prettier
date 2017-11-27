[![Build Status](https://travis-ci.org/keplersj/jest-runner-prettier.svg?branch=master)](https://travis-ci.org/keplersj/jest-runner-prettier)
[![npm version](https://badge.fury.io/js/jest-runner-prettier.svg)](https://badge.fury.io/js/jest-runner-prettier)
[![codecov](https://codecov.io/gh/keplersj/jest-runner-prettier/branch/master/graph/badge.svg)](https://codecov.io/gh/keplersj/jest-runner-prettier)

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <img width="150" height="150" src="https://github.com/prettier/prettier-logo/raw/master/images/prettier-icon-light.png">
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="https://cdn.worldvectorlogo.com/logos/jest.svg">
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

Install `jest`_(it needs Jest 21+)_ and `jest-runner-prettier`

```bash
yarn add --dev jest jest-runner-prettier

# or with NPM

npm install --save-dev jest jest-runner-prettier
```

### Add it to your Jest config

In your `package.json`

```json
{
  "jest": {
    "runner": "jest-runner-prettier",
    "moduleFileExtensions": [
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
    "testMatch": [
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
    ]
  }
}
```

Or in `jest.config.js`

```js
module.exports = {
  runner: "jest-runner-prettier",
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
  ]
};
```

### Run Jest

```bash
yarn jest
```

const chalk = require("chalk");
const { highlight } = require("cli-highlight");
const { pass, fail } = require("create-jest-runner");
const fs = require("fs");
const diff = require("jest-diff");
const prettier = require("prettier");

module.exports = ({ testPath, config, globalConfig }) => {
  const start = new Date();
  const contents = fs.readFileSync(testPath, "utf8");

  const isPretty = prettier.check(contents, { filepath: testPath });

  if (isPretty) {
    return pass({
      start,
      end: new Date(),
      test: { path: testPath }
    });
  }

  const formatted = prettier.format(contents, { filepath: testPath });

  return fail({
    start,
    end: new Date(),
    test: {
      path: testPath,
      errorMessage: diff(highlight(formatted), highlight(contents), {
        expand: false
      })
    }
  });
};

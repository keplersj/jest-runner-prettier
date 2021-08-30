const { highlight } = require("cli-highlight");
const { pass, fail } = require("create-jest-runner");
const fs = require("fs");
const { diff } = require("jest-diff");
const prettier = require("prettier");

module.exports = ({ testPath }) => {
  const start = new Date();
  const contents = fs.readFileSync(testPath, "utf8");

  return prettier.resolveConfig(testPath).then((config) => {
    const prettierConfig = Object.assign({}, config, {
      filepath: testPath,
    });

    const isPretty = prettier.check(contents, prettierConfig);
    if (isPretty) {
      return pass({
        start,
        end: new Date(),
        test: { path: testPath },
      });
    }

    const formatted = prettier.format(contents, prettierConfig);

    return fail({
      start,
      end: new Date(),
      test: {
        path: testPath,
        errorMessage: diff(highlight(formatted), highlight(contents), {
          expand: false,
        }),
      },
    });
  });
};

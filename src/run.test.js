const path = require("path");
const run = require("./run");

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (value, serialize) => {
    delete value.perfStats;
    delete value.testFilePath;
    value.testResults.forEach((result) => {
      delete result.duration;
    });
    return serialize(value);
  },
  test: (value) =>
    value && value.perfStats && value.testFilePath && value.testResults,
});

describe("jest-runner-prettier", () => {
  describe("JSON", () => {
    describe("good fixture", () => {
      it("matches snapshot", () => {
        return run({
          testPath: path.join(__dirname, "__fixtures__", `good.json`),
          config: {},
          globalConfig: {},
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });

    describe("bad fixture", () => {
      it("matches snapshot", () => {
        return run({
          testPath: path.join(__dirname, "__fixtures__", `bad.json`),
          config: {},
          globalConfig: {},
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });
  });

  describe("JSX", () => {
    describe("good fixture", () => {
      it("matches snapshot", () => {
        return run({
          testPath: path.join(__dirname, "__fixtures__", `good.jsx`),
          config: {},
          globalConfig: {},
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });

    describe("bad fixture", () => {
      it("matches snapshot", () => {
        return run({
          testPath: path.join(__dirname, "__fixtures__", `bad.jsx`),
          config: {},
          globalConfig: {},
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });
  });
});

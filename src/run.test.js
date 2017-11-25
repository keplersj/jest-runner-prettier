const path = require("path");
const run = require("./run");

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (val, serialize) => {
    delete val.perfStats;
    delete val.testFilePath;
    val.testResults.forEach(result => {
      delete result.duration;
    });
    return serialize(val);
  },
  test: val => val && val.perfStats && val.testFilePath && val.testResults
});

const snapShotTest = fileName => () => {
  it("matches snapshot", () => {
    const result = run({
      testPath: path.join(__dirname, "__fixtures__", fileName),
      config: {},
      globalConfig: {}
    });

    expect(result).toMatchSnapshot();
  });
};

const fileTypeTests = fileType => () => {
  describe("good fixture", snapShotTest(`good.${fileType}`));
  describe("bad fixture", snapShotTest(`bad.${fileType}`));
};

describe("jest-runner-prettier", () => {
  describe("JSX", fileTypeTests("jsx"));
});

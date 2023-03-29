import path from "node:path";
import run from "./run";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Remove undeterministic data from test reports
expect.addSnapshotSerializer({
  print: (value: any, serialize) => {
    delete value.perfStats;
    delete value.testFilePath;
    for (const result of value.testResults) {
      delete result.duration;
    }
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
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });

    describe("bad fixture", () => {
      it("matches snapshot", () => {
        return run({
          testPath: path.join(__dirname, "__fixtures__", `bad.json`),
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });

    describe("ignored fixture", () => {
      it("matches snapshot", () => {
        return run({
          testPath: path.join(__dirname, "__fixtures__", `ignored.json`),
          ignorePath: path.join(__dirname, "__fixtures__", "prettierignore"),
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });
  });

  describe("JSX", () => {
    describe("good fixture", () => {
      it("matches snapshot", () => {
        return run({
          testPath: path.join(__dirname, "__fixtures__", `good.jsx`),
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });

    describe("bad fixture", () => {
      it("matches snapshot", () => {
        return run({
          testPath: path.join(__dirname, "__fixtures__", `bad.jsx`),
        }).then((result) => expect(result).toMatchSnapshot());
      });
    });
  });
});

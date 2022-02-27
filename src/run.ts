import { TestResult } from "@jest/test-result";
import { emphasize } from "emphasize";
import { pass, fail } from "create-jest-runner";
import * as fs from "node:fs/promises";
import { diff } from "jest-diff";
import prettier from "prettier";

interface Parameters {
  testPath: string;
}

export default async ({ testPath }: Parameters): Promise<TestResult> => {
  const start = Date.now();
  const contents = await fs.readFile(testPath, "utf8");
  const config = await prettier.resolveConfig(testPath);

  const prettierConfig = {
    ...config,
    filepath: testPath,
  };

  const isPretty = prettier.check(contents, prettierConfig);
  if (isPretty) {
    return pass({
      start,
      end: Date.now(),
      test: { path: testPath },
    });
  }

  const formatted = prettier.format(contents, prettierConfig);

  return fail({
    start,
    end: Date.now(),
    test: {
      path: testPath,
      errorMessage: diff(
        emphasize.highlightAuto(formatted).value,
        emphasize.highlightAuto(contents).value,
        {
          expand: false,
        }
      ),
    },
  });
};

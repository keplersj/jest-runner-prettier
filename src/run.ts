import { TestResult } from "@jest/test-result";
import { emphasize } from "emphasize";
import { pass, fail } from "create-lite-jest-runner";
import * as fs from "node:fs/promises";
import { diff } from "jest-diff";
import prettier from "prettier";

interface Parameters {
  testPath: string;
  ignorePath?: string;
}

export default async ({ testPath, ignorePath }: Parameters): Promise<TestResult> => {
  const start = Date.now();
  const fileInfo = await prettier.getFileInfo(testPath, { ignorePath });

  if (fileInfo.ignored) {
    const end = Date.now();
    return {
      leaks: false,
      numFailingTests: 0,
      numPassingTests: 0,
      numPendingTests: 1,
      numTodoTests: 0,
      openHandles: [],
      perfStats: {
        start,
        end,
        runtime: end - start,
        slow: false,
      },
      skipped: true,
      snapshot: {
        added: 0,
        fileDeleted: false,
        matched: 0,
        unchecked: 0,
        uncheckedKeys: [],
        unmatched: 0,
        updated: 0,
      },
      testFilePath: testPath,
      testResults: [],
    };
  }

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
      ) as string | undefined,
    },
  });
};

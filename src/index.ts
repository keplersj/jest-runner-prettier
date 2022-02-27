import { SerializableError } from "@jest/test-result";
import type { Config } from "@jest/types";
import type * as JestRunner from "jest-runner";
import pLimit from "p-limit";
import run from "./run.js";

export default class PrettierTestRunner {
  constructor(
    public readonly _globalConfig: Config.GlobalConfig,
    public readonly _context: JestRunner.TestRunnerContext = {}
  ) {
    this._globalConfig = _globalConfig;
    this._context = _context;
  }

  async runTests(
    tests: Array<JestRunner.Test>,
    _: JestRunner.TestWatcher,
    onStart: JestRunner.OnTestStart,
    onResult: JestRunner.OnTestSuccess,
    onFailure: JestRunner.OnTestFailure
  ): Promise<void> {
    const limit = pLimit(this._globalConfig.maxWorkers);

    const promises = tests.map((test) =>
      limit(async () => {
        await onStart(test);
        try {
          const result = await run({ testPath: test.path });
          await onResult(test, result);
        } catch (error) {
          await onFailure(test, error as SerializableError);
        }
      })
    );

    await Promise.all(promises);
  }
}

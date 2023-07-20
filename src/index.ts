import createJestRunner from "create-lite-jest-runner";
import run from "./run.js";
import type { EmittingTestRunner } from "jest-runner";

const runner: Omit<typeof EmittingTestRunner, "supportsEventEmitters"> = createJestRunner(run)
export default runner;

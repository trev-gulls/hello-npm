import { test, expect } from "bun:test";

test("prints Hello, npm!", async () => {
  const result = Bun.spawnSync(["bun", "src/cli.ts"]);
  expect(result.stdout.toString().trim()).toBe("Hello, npm!");
});

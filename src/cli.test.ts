import { test, expect } from "bun:test";

test("prints Hello, npm!", async () => {
  const proc = Bun.spawn(["bun", "src/cli.ts"]);
  const output = await new Response(proc.stdout).text();
  expect(output.trim()).toBe("Hello, npm!");
});

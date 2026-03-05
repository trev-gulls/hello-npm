# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`@tgulls/hello` — a minimal npm CLI package that prints "Hello, npm!" Published to npm under the `@tgulls` scope.

## Commands

```sh
bun run build          # Build: compiles src/cli.ts → bin/hello.js (node target)
bun test               # Test: runs all *.test.ts files
bun test src/cli.test.ts  # Run a single test file
```

Build runs automatically on `bun publish` via the `prepublishOnly` script.

## Architecture

This is a single-file CLI package. The build pipeline is:

```
src/cli.ts  →  bun build (--target node)  →  bin/hello.js
```

- `src/cli.ts` — source, runs with Bun directly during development
- `bin/hello.js` — built output with `#!/usr/bin/env node` shebang, published to npm
- The `bin` field in `package.json` maps the `hello` command to `bin/hello.js`
- The `files` field limits the published package to only the `bin/` directory
- Tests spawn `bun src/cli.ts` as a subprocess and assert on stdout

## Tooling

- **Runtime/bundler:** Bun (use `bun` not `node`, `npm`, or `npx`)
- **Testing:** `bun:test` (use `bun test` not `jest` or `vitest`)
- **TypeScript:** strict mode, bundler module resolution, no emit (Bun handles transpilation)

## Workflow

Always commit after making changes and verifying passing tests.

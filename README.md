# @tgulls/hello

A simple CLI that prints "Hello, npm!"

## Usage

Run directly without installing:

### bun

```sh
bunx @tgulls/hello
```

### npm

```sh
npx @tgulls/hello
```

Or install globally:

### bun

```sh
bun add -g @tgulls/hello
hello
```

### npm

```sh
npm install -g @tgulls/hello
hello
```

## Local Development

### bun

```sh
bun run build
bun link
bunx @tgulls/hello
```

### npm

```sh
npm run build
npm link
npx @tgulls/hello
```

## Publishing

### bun

```sh
bunx npm login
bun publish --access public
```

### npm

```sh
npm login
npm publish --access public
```

## License

MIT

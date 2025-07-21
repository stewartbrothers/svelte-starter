# SvelteKit SB Base

SB Sveltekit Starter Project

## Install the project


### bun
```bash
# install using bun
bun install

# Install using NPM
npm install
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
# using Bun
bun run dev -- --open

# using NPM
npm run dev -- --open
```

## Updating the DB Schema

After modifying the schema in src/lib/db update via drizzle

```bash
#using bun
# Update drizzle's schema definitions with new changes
bunx drizzle-kit generate
# Apply new changes to the database.
bunx drizzle-kit migrate
```

## Building

To create a production version of your app:

```bash
npm run build
```


> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

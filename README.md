# Zero Nuxt Examples

Here are some examples of how to use Zero with Nuxt where based on the route, we create a new Zero client.

There are three methods of doing this:

1. Using a composable (`app/composables/zero-composable.ts`)
2. Using a provider component (`app/components/ZeroProvider.vue` and `app/composables/zero-provider.ts`)
3. Using a plugin (`app/plugins/zero.ts` and `app/composables/zero-plugin.ts`)

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

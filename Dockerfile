# Base image with Node and pnpm
FROM node:24.2-alpine AS base
WORKDIR /app

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy the lockfile and package.json early to cache layer
COPY package.json pnpm-lock.yaml ./

# Install only production deps
FROM base AS prod-deps
RUN pnpm install --frozen-lockfile --prod

# Install full deps for build
FROM base AS build-deps
RUN pnpm install --frozen-lockfile

# Build Astro site
FROM build-deps AS build
COPY . .
RUN pnpm run build

# Final runtime image
FROM node:24.2-alpine AS runtime
WORKDIR /app

# Enable pnpm (optional if you only use node at runtime)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy runtime deps and built site
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]

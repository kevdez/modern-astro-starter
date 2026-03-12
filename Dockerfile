FROM node:22-alpine AS base
WORKDIR /app

# Install dependencies
FROM base AS install
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Build
FROM install AS build
COPY . .
RUN npm run build

# Production runner
FROM node:22-alpine AS runner
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["npm", "run", "start"]

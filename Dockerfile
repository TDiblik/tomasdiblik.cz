# ==========================================
# Stage 1: Builder
# ==========================================
FROM ghcr.io/pnpm/pnpm:12.21.0 AS builder
RUN pnpm runtime set node 26 -g

WORKDIR /build
COPY ./package.json ./pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/var/cache/pnpm \
  pnpm install --store-dir /var/cache/pnpm --frozen-lockfile

COPY ./astro.config.ts ./tsconfig.json ./biome.json ./.gitignore ./
COPY ./public ./public
COPY ./src ./src

RUN pnpm build

COPY ./LICENSE ./dist/LICENSE

RUN find ./dist/ -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.svg" -o -name "*.xml" -o -name "*.txt" \) \
  -size +1k -exec gzip -9 -k -n {} +

# ==========================================
# Stage 2: Production (Nginx)
# ==========================================
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-config /etc/nginx/conf.d/tomasdiblik.conf
COPY --from=builder /build/dist /app/tomasdiblik.cz/
EXPOSE 20342

CMD ["nginx", "-g", "daemon off;"]

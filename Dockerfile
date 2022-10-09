FROM node:16-alpine AS builder
WORKDIR /app

COPY . .

RUN yarn

# RUN yarn build
RUN yarn build --filter=[HEAD^1]

FROM node:16-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/./ ./

USER nextjs

CMD yarn start

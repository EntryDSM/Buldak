FROM node:16-alpine AS builder
WORKDIR /app

COPY ./package.json ./package.json
COPY ./apps/main/package.json ./apps/main/package.json
COPY ./apps/user/package.json ./apps/user/package.json
COPY ./apps/teacher/package.json ./apps/teacher/package.json
COPY ./apps/company/package.json ./apps/company/package.json
COPY ./packages/emotion-style-provider/package.json ./packages/emotion-style-provider/package.json
COPY ./packages/eslint-config-custom/package.json ./packages/eslint-config-custom/package.json
COPY ./packages/preview/package.json ./packages/preview/package.json
COPY ./packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY ./packages/ui/package.json ./packages/ui/package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY . .

RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/./ ./

USER nextjs

CMD yarn dev

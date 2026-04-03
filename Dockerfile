FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY app/ app/

ENV NODE_ENV=production
EXPOSE 3000

USER node
CMD ["npx", "tsx", "app/server.ts"]

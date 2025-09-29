# Build stage
FROM node:24 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run prestart

FROM node:24

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app ./
EXPOSE 3000
CMD ["node", "server.js"]
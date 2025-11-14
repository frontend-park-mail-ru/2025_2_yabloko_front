# Build stage
FROM node:24 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .
RUN npm run bundle

FROM node:24

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY --from=builder /app ./
EXPOSE 3000
CMD ["node", "server/server.js"]
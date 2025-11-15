FROM node:24

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run bundle

EXPOSE 3001

CMD ["node", "server.js"]
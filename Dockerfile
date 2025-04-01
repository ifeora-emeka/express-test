FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -D typescript

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]
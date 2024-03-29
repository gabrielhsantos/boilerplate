FROM node:14

WORKDIR /app

COPY package.json .

RUN npm ci

COPY . ./

RUN npm run build

EXPOSE 4000

CMD ["node", "./lib/api/server.js"]
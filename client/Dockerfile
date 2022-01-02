FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

CMD npm run dev
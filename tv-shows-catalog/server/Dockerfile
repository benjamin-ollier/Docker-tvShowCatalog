FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build 

CMD [ "npm","run", "start:prod" ]

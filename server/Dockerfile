FROM node:14

WORKDIR /usr/src/app

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run-script", "start-dev"]
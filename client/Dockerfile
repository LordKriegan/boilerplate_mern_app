FROM node:14

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

RUN npm install react-scripts@5.0.0 -g

COPY . ./

CMD [ "npm", "start" ]
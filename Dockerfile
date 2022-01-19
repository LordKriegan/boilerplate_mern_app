### STAGE 1 ###

FROM node:14 AS builder

WORKDIR /usr/src/client

COPY ./client .

RUN npm install

RUN npm run-script build

### STAGE 2 ###
FROM node:14 

WORKDIR /usr/src/server

COPY ./server .

COPY --from=builder ./usr/src/client/build ./client

RUN npm install

EXPOSE 80

EXPOSE 443

CMD ["npm", "run-script", "start-staging"]
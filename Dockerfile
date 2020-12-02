FROM node:current-slim

WORKDIR /usr/toa

COPY ["package.json", "yarn.lock", "./"]

RUN yarn 

EXPOSE 7676

COPY . .

CMD [ "npm", "start" ]
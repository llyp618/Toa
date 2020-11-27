FROM node:current-slim

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn --production

EXPOSE 7676

COPY . .

CMD ["yarn", "pro"]

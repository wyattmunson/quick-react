FROM node:8.10
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN npm install -g serve
RUN yarn
COPY . ./
RUN yarn build

CMD ["serve", "-s", "build"]
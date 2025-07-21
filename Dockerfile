FROM node:lts-alpine3.19
WORKDIR /test
COPY package.json package-lock.json ./

# update npm and install pnpm from npm
RUN npm i

COPY . /test
EXPOSE 3000
CMD ["node", "index.js"]
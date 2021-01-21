FROM node:alpine

WORKDIR /app
COPY . ./

ENV PATH ./node_modules/.bin:$PATH

RUN chown -R node:node ./
USER node

RUN mkdir -p /app/node_modules

EXPOSE 443

CMD [ "sh", "-c", "mkdir -p /app/node_modules && npm i && npm run dev" ]

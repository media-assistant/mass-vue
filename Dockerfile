FROM node:alpine

ARG SERVER_PORT

WORKDIR /app
COPY . ./

ENV PATH ./node_modules/.bin:$PATH
ENV NODE_ENV "development"

USER node

RUN mkdir -p /app/node_modules

EXPOSE $SERVER_PORT

CMD [ "sh", "-c", "mkdir -p /app/node_modules && npm ci && npm run dev" ]

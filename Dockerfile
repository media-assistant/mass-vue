FROM node:alpine

ARG APP_PORT

WORKDIR /app
COPY . ./

ENV PATH ./node_modules/.bin:$PATH

USER node

RUN mkdir -p /app/node_modules

EXPOSE $APP_PORT

CMD [ "sh", "-c", "mkdir -p /app/node_modules && npm ci && npm run dev" ]

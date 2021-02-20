FROM node:alpine

WORKDIR /app
COPY . ./

ENV PATH ./node_modules/.bin:$PATH
ENV NODE_ENV "development"

USER node

RUN mkdir -p /app/node_modules

EXPOSE 3000

CMD [ "sh", "-c", "mkdir -p /app/node_modules && npm ci && npm run dev" ]

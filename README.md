# mass-vue

Front end for [mass-api](https://github.com/media-assistant/mass-api) using Vite, Vue 3 and Tailwindcss. WIP :D

## Development

### Vite development server (recommended)

The recommended way to develop is through the Vite development server. Additionally, we support running a production build locally through nginx.

### First time setup

```bash
$ docker-compose run --rm mass-vue npm ci
```

### Development server

Run the development server using the command below.

```bash
$ docker-compose up
```

One is able to change the development server's behaviour by setting the following environment variables:

```sh
SERVER_HOST=localhost #Change the development server's host, defaults to localhost when unset
SERVER_PORT=3000 #Change the development server's port, defaults to 3000 when unset
VITE_API_URL=mass.my-domain.dev #Change where Vite expects the API endpoint where mass-api is running
VITE_DISABLE_MOCKS= #Disables MirageJS mocks. Make sure to leave this unset this to enable mocks.
```

To run commands inside the container (to add/remove dependencies for example), run (in a seperate terminal):

```bash
$ docker-compose exec mass-vue sh
```

## Deployment (nginx)

Running the command below will run a production build:

```bash
$ docker-compose -f docker-compose.prod.yml up -d --build
```

It will use nginx to serve the compiled front-end files. By default, it will listen on port 80. This port can be changed by setting the `SERVER_PORT` environment variable.
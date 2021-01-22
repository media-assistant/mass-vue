# mass-vue

Front end for [mass-api](https://github.com/media-assistant/mass-api) using Vite, Vue 3 and Tailwindcss. WIP :D

## Development

### Vite development server

Run the development server on port 3000 using the command below.

```bash
docker-compose up --build
```

To run commands inside the container (to add/remove dependencies for example), run (in a seperate terminal):

```bash
docker-compose exec mass-vue sh
```

### nginx

Running the command below will run a production build and expose the result on port 3000:

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

It will use nginx to serve the compiled front-end files.
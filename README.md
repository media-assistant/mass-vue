# mass-vue

Front end for MASS api using Vite, Vue 3 and Tailwindcss. WIP :D

## Develop with Vite dev server

```bash
docker-compose up --build
```

### Commands in container

```bash
docker-compose exec mass-vue sh
```

## Deploy with nginx

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```


# study-platform-server

## Setup Order

1. ./scripts/setup_containers.sh
2. (npx prisma migrate dev)
3. npm run generate
4. npm run dev

## prisma

```
npx prisma init

npx prisma migrate dev

npx prisma migrate deploy
```

## Links

### Deploy

* [Prisma Prod Docs](https://www.prisma.io/docs/concepts/components/prisma-migrate#production-and-testing-environments)
* [How To Deploy Next.js, Prisma & Postgres FullStack Application](https://www.youtube.com/watch?v=p1BJbCo0po0)

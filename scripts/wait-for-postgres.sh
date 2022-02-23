#!/bin/sh
# wait-for-postgres.sh

set -e

host="$1"
shift

until pg_isready -d mydb -h "$host" -p 5432 -U dbpostgres
do
  >&2 echo "[POSTGRES CHECK] Postgres is unavailable - sleeping"
  sleep 1;
done

>&2 echo "[POSTGRES CHECK] Postgres is up - executing command"
exec "$@"

#!/usr/bin/env bash
set -e

echo "Applying migrations…"
python manage.py migrate --noinput

echo "Seeding database…"
python manage.py shell < scripts/seed_db.py

echo "Starting server…"
exec "$@"

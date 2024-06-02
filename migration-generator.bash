#!/bin/bash

set -e

# Check if migration name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <migration_name>"
  exit 1
fi

MIGRATION_NAME=$1

# Step 1: Create the up migration using Prisma
npx prisma migrate dev --name "$MIGRATION_NAME" --create-only

# Step 2: Get the latest migration directory
MIGRATION_DIR=$(ls -td prisma/migrations/* | head -1)

# Step 3: Generate the down.sql file
UP_SQL_FILE="$MIGRATION_DIR/migration.sql"
DOWN_SQL_FILE="$MIGRATION_DIR/down.sql"

# Reverse the schema to get the down.sql
npx prisma migrate diff \
  --from-schema-datamodel prisma/schema.prisma \
  --to-schema-datasource prisma/schema.prisma \
  --script > "$DOWN_SQL_FILE"

echo "Migration created successfully!"
echo "Up migration: $UP_SQL_FILE"
echo "Down migration: $DOWN_SQL_FILE"

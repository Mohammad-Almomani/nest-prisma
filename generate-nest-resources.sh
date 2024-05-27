#!/bin/bash

# Path to your Prisma schema file
PRISMA_SCHEMA="./prisma/schema.prisma"

# Path to your NestJS modules directory
NEST_MODULES_DIR="./src"

# Function to check if a NestJS module exists
function module_exists {
  if [ -d "$NEST_MODULES_DIR/$1" ]; then
    return 0
  else
    return 1
  fi
}

# Read Prisma schema and extract model names
models=$(grep -E 'model\s+\w+' $PRISMA_SCHEMA | awk '{print $2}')

for model in $models; do
  module=$(echo "$model" | tr '[:upper:]' '[:lower:]')
  if module_exists "$module"; then
    echo "Module $module already exists. Skipping..."
  else
    echo "Generating NestJS resource for model: $model"
    npx nest g resource $module
  fi
done

echo "Resource generation completed."

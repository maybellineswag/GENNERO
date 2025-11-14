#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Change to the script directory (project root)
cd "$SCRIPT_DIR" || {
  echo "❌ Error: Cannot change to project directory: $SCRIPT_DIR"
  exit 1
}

# Verify we're in the right place
if [ ! -f "package.json" ]; then
  echo "❌ Error: package.json not found in $SCRIPT_DIR"
  echo "   Are you sure this is the correct project directory?"
  exit 1
fi

# Run the Node.js dev script directly
exec node scripts/dev.js


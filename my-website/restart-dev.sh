#!/bin/bash
# Kill any existing Next.js processes
echo "Stopping existing Next.js processes..."
lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || echo "No processes found"

# Clear cache
echo "Clearing cache..."
rm -rf .next
rm -rf node_modules/.cache

# Start dev server
echo "Starting dev server..."
npm run dev


#!/usr/bin/env node

/**
 * This script finds the project root by looking for package.json
 * and then runs the dev script. This works even if the terminal
 * has lost track of the current working directory.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Function to find project root by looking for package.json
function findProjectRoot(startPath) {
  let currentPath = path.resolve(startPath || __dirname);
  const root = path.parse(currentPath).root;
  
  while (currentPath !== root) {
    const packageJsonPath = path.join(currentPath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      return currentPath;
    }
    currentPath = path.dirname(currentPath);
  }
  
  // If we can't find it, try using __dirname
  const scriptDir = path.resolve(__dirname, '..');
  if (fs.existsSync(path.join(scriptDir, 'package.json'))) {
    return scriptDir;
  }
  
  throw new Error('Could not find project root (package.json not found)');
}

try {
  // Try to get project root
  const projectRoot = findProjectRoot();
  
  // Change to project root
  process.chdir(projectRoot);
  
  // Now require and run the dev script
  require('./dev.js');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}


#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const { findAvailablePort } = require('./find-port');

// Ensure we're in the correct directory (project root)
const projectRoot = path.resolve(__dirname, '..');

// Change to project root to avoid working directory issues
try {
  process.chdir(projectRoot);
} catch (err) {
  console.error(`❌ Error changing to directory ${projectRoot}:`, err.message);
  process.exit(1);
}

findAvailablePort(3000)
  .then(port => {
    console.log(`🚀 Starting dev server on port ${port}...`);
    console.log(`📍 Server will be available at http://localhost:${port}\n`);
    
    // Use spawn for better process handling
    // Use next directly - npm scripts handle PATH resolution
    const isWindows = process.platform === 'win32';
    const command = isWindows ? 'next.cmd' : 'next';
    const child = spawn(command, ['dev', '-p', port.toString()], {
      cwd: projectRoot,
      stdio: 'inherit',
      shell: isWindows,
      env: {
        ...process.env,
        PATH: path.join(projectRoot, 'node_modules', '.bin') + path.delimiter + process.env.PATH
      }
    });
    
    // Handle process termination
    const cleanup = (signal) => {
      if (child && !child.killed) {
        console.log(`\n🛑 Stopping dev server (port ${port})...`);
        child.kill(signal);
      }
    };
    
    process.on('SIGINT', () => cleanup('SIGINT'));
    process.on('SIGTERM', () => cleanup('SIGTERM'));
    
    child.on('exit', (code, signal) => {
      if (signal) {
        process.exit(0);
      } else {
        process.exit(code || 0);
      }
    });
    
    child.on('error', (err) => {
      console.error('❌ Error starting dev server:', err.message);
      process.exit(1);
    });
  })
  .catch(err => {
    console.error('❌ Error finding available port:', err.message);
    process.exit(1);
  });


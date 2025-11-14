#!/usr/bin/env node

const net = require('net');

/**
 * Finds an available port starting from the given port
 * @param {number} startPort - The port to start checking from
 * @returns {Promise<number>} - An available port
 */
function findAvailablePort(startPort = 3000) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    
    server.listen(startPort, () => {
      const port = server.address().port;
      server.close(() => {
        resolve(port);
      });
    });
    
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Port is in use, try the next one
        findAvailablePort(startPort + 1).then(resolve).catch(reject);
      } else {
        reject(err);
      }
    });
  });
}

// If run directly, find a port and output it
if (require.main === module) {
  findAvailablePort(3000)
    .then(port => {
      console.log(port);
      process.exit(0);
    })
    .catch(err => {
      console.error('Error finding port:', err);
      process.exit(1);
    });
}

module.exports = { findAvailablePort };


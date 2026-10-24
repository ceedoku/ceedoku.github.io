const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // 1. Get the raw requested path
  let filePath = path.join(__dirname, req.url);

  // 2. Check what the path actually points to
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      // If it's a folder (like /home), look for the index.html inside it
      filePath = path.join(filePath, 'index.html');
    }

    // 3. Resolve the content type now that filePath is final
    const extname = String(path.extname(filePath)).toLowerCase();
    let contentType = MIME_TYPES[extname] || 'application/octet-stream';

    // 4. Read and serve the file
    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT' || error.code === 'EISDIR') {
          // Serve your custom 404 page if not found or still an invalid directory
          fs.readFile(path.join(__dirname, '404.html'), (err404, notFoundContent) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(notFoundContent || '<h1>404 Not Found</h1>', 'utf-8');
          });
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${error.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });
});

server.listen(PORT, 'localhost', () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

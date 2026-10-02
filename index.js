const http = require('http');
const port = process.env.PORT || 3000;
const bootedAt = Date.now();
http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ ok: true, uptime_ms: Date.now() - bootedAt, path: req.url }));
}).listen(port, () => console.log('listening on ' + port));

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "public");
const port = Number(process.env.PORT || 3000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8"
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "content-type": type,
    "cache-control": status === 200 ? "public, max-age=60" : "no-store"
  });
  res.end(body);
}

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const requested = path.normalize(cleanPath || "index.html");
  const fullPath = path.join(root, requested);
  if (!fullPath.startsWith(root)) return null;
  return fullPath;
}

const server = http.createServer((req, res) => {
  const fullPath = resolveFile(req.url || "/");
  if (!fullPath) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.stat(fullPath, (statError, stat) => {
    const filePath = !statError && stat.isFile() ? fullPath : path.join(root, "index.html");
    fs.readFile(filePath, (readError, content) => {
      if (readError) {
        send(res, 500, "Unable to load page");
        return;
      }
      send(res, 200, content, types[path.extname(filePath)] || "application/octet-stream");
    });
  });
});

server.listen(port, () => {
  console.log(`Estudio Digital Solvers running on http://localhost:${port}`);
});

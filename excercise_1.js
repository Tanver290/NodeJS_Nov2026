import http from "node:http";
import fs from "node:fs";

const writeContent = (content, done) => {
  fs.appendFile("output.txt", `${content}\n`, "utf8", (err) => {
    if (err) {
      done(err);
      return;
    }

    done(null);
  });
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET" || req.url !== "/content") {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const content = "This is some content received";

  writeContent(content, (err) => {
    if (err) {
      console.error("Could not write content:", err);
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      res.end("Could not save content");
      return;
    }

    res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    res.end(content);
  });
});

const hostName = "127.0.0.1";
const port = 8080;

server.listen(port, hostName, () => {
  console.info(`Server is running at http://${hostName}:${port}`);
});
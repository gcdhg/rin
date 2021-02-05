import http from "http";

export default (data) =>
  http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(data);
    res.end();
  });

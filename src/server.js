import http from "http";
import { URL as Url } from "url";
import router from "./router.js";

export default (data) =>
  http.createServer((req, res) => {

    const body = [];
    let code;

    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
      try {
        const url = new Url(req.url, `http://${req.headers.host}`);
        const rout = router[req.method];
        const handler = rout[url.pathname];
        code = handler(req, res, data, code);
        return true;
      } catch (err) {
        code = 404;
        res.writeHead(404);
        res.end()
      }
      
    });
    req.on("close", () => console.log(req.method, req.url, code));
  });

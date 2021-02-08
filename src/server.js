import http from "http";
import Response from "./response.js";
import { URL as Url } from "url";

export default (data, router) =>
  http.createServer(async (req, res) => {
    const body = [];
    let code;

    req.on("data", async (chunk) => body.push(chunk));
    req.on("end", async () => {
      try {
        const url = new Url(req.url, `http://${req.headers.host}`);
        const rout = router.getRouts()[req.method];
        const handler = rout[url.pathname] || null;
        if (!handler) {
          throw new Error("No such route");
        }
        const response = new Response(res);
        code = await handler(req, response, data, code);
        console.log(req.method, req.url, response.getStatus());
      } catch (err) {
        code = 500;
        console.log(req.method, req.url, code);
        console.log(err);
        res.writeHead(404);
        res.end();
      }
    });
  });

import http from "http";
import Response from "./response.js";
import { URL as Url } from "url";

export default (data, router) =>
  http.createServer(async (req, res) => {
    const response = new Response(res, data);
    const body = [];

    req.on("data", async (chunk) => body.push(chunk));
    req.on("end", async () => {
      try {
        const url = new Url(req.url, `http://${req.headers.host}`);
        const { pathname } = url;
        const allRouts = router.getRouts();
        const methodRouts = allRouts[req.method];
        const validPath = Object.keys(methodRouts).find((path) => {
          const regexp = new RegExp(`^${path}$`);
          return pathname.match(regexp);
        });
        const handler = methodRouts[validPath];
        if (!handler) {
          throw new Error("No such route");
        }
        await handler(req, response, data);
        console.log(req.method, req.url, response.getStatus());
      } catch (err) {
        response.status(500);
        console.log(req.method, req.url, response.getStatus());
        console.log(err);
        response.send();
      }
    });
  });

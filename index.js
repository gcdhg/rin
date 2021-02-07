import server from "./src/server.js";
import render from "./src/render/render.js";
import Router from "./src/router.js";
import env from "./env.js";

const [, , procPort] = process.argv;
const data = await render();
const router = new Router();

router.get("/", async (_req, res, data) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write(data["index.html"].toString());
  res.end();
  return 200;
});

const port = procPort || env.PORT;
server(data.html, router).listen(port, () =>
  console.log(`server started on port: ${port}`)
);

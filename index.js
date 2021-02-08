import server from "./src/server.js";
import render from "./src/render/render.js";
import Router from "./src/router.js";
import env from "./env.js";

const [, , procPort] = process.argv;
const data = await render();
const router = new Router();

router.get("/", async (_req, res, data) => {
  res.status(200);
  res.send("html", data['index.html']);
});

const port = procPort || env.PORT;
server(data.html, router).listen(port, () =>
  console.log(`server started on port: ${port}`)
);

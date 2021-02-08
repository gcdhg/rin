import server from "./src/server.js";
import render from "./src/render.js";
import Router from "./src/router.js";
import env from "./env.js";

const [, , procPort] = process.argv;
const data = await render();
const router = new Router();

router.get("/", async (_req, res, data) => {
  res.status(200).sendStatic("index.html");
  // res.sendStaticHTML("index");
});

const port = procPort || env.PORT;
server(data, router).listen(port, () =>
  console.log(`server started on port: ${port}`)
);

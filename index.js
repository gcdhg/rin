import server from "./src/server.js";
import render from "./src/render.js";
import Router from "./src/router.js";
import env from "./env.js";

const [, , procPort] = process.argv;
const data = await render();
const router = new Router();

const serverData = [];

router.get("/", async (_req, res, data) => {
  res.status(200).sendStatic("index.html");
  // res.sendStaticHTML("index");
});
router.post("/", async (_req, res, body) => {
  serverData.push(body.toString());
  res.status(201).send("json", { status: "created" });
});

router.get("/todo/all", async (_req, res, body) => {
  console.log(serverData.toString());
  res.status(200).send("json", serverData);
});

router.get("/json", async (_req, res, body) => {
  res.status(200).send("json", { title: "Hello there !!", general: "kenobi" });
});

const port = procPort || env.PORT;
server(data, router).listen(port, () =>
  console.log(`server started on port: ${port}`)
);

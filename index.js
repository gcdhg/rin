import server from "./src/server.js";
import getHtml from "./src/render/rawData.js";
import render from "./src/render/render.js";
import env from "./env.js";
// import fileReader from "./src/fileReader";
const [, , procPort] = process.argv;
const data = await render();

const port = procPort || env.PORT;
server(data.html).listen(port, () =>
  console.log(`server started on port: ${port}`)
);

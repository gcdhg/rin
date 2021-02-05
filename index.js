import server from "./server.js";
import raw from "./getStaticData.js";

const data = await raw();

const port = 9000;
server(data).listen(port, () => console.log('server started'));
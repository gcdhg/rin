import server from "./server.js";

const port = 9000;
server().listen(port, () => console.log('server started'));
export default {
  GET: {
    "/": (req, res, data) => {
      // console.info(req.method, req.url, 200)
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data["index.html"].toString());
      res.end();
      return 200;
    },
  },
  POST: {},
  PUT: {},
  DELETE: {},
};

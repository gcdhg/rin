export default class Router {
  static mapping = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
  };
  constructor(res, data = "") {
    this._res = res;
    this._status = 200;
    this._staticData = data;
  }
  status(code) {
    this._status = code;
    return this;
  }
  getStatus() {
    return this._status;
  }
  send(type = "html", toClient = "") {
    try {
      const content = Router.mapping[type];
      let data = toClient;
      if (type === "json") {
        data = JSON.stringify(toClient).toString();
      }
      this._res.writeHead(this._status, {
        "Content-Type": content,
      });
      this._res.write(data);
      this._res.end();
      return this;
    } catch (err) {
      this.status(404).send();
    }
  }
  sendStatic(name) {
    const data = this._staticData;
    const types = Object.keys(data);
    const result = [];
    for (const type of types) {
      const validFile = Object.keys(data[type]).find((file) => {
        const reg = new RegExp(`^${name}$`);
        return file.match(reg);
      });
      if (validFile) {
        result.push(type, data[type][validFile]);
      }
    }
    this.status(200);
    this.send(...result);
  }
}

export default class Router {
  static mapping = {
    html: "text/html",
    css: "text/html",
    js: "text/html",
    json: "text/html",
  };
  constructor(res) {
    this._res = res;
    this._status = 200;
  }
  status(code) {
    this._status = code;
  }
  getStatus() {
    return this._status;
  }
  send(type, data) {
    const content = Router.mapping[type];
    let raw = data;
    this._res.writeHead(this._status, {
      "Content-Type": content,
    });
    if (content === "json") {
      raw = JSON.stringify(data);
    }
    this._res.write(raw.toString());
    this._res.end();
  }
}

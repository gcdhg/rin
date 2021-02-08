export default class Router {
  constructor() {
    this.route = {
      GET: {
        '/favicon.ico': (req, res, data) => {
          res.status(404).send();
        },
        "/assets/(\\w+)/(\\w+).(\\w+)": (req, res, data) => {
          const [, name] = req.url.replace('/assets/', '').split('/');
          res.status(200);
          res.sendStatic(name);
        },
      },
      POST: {},
      PUT: {},
      PATCH: {},
      DELETE: {},
    };
  }
  get(path, cb) {
    this.route.GET[path] = cb;
  }
  post(path, cb) {
    this.route.POST[path] = cb;
  }
  put(path, cb) {
    this.route.PUT[path] = cb;
  }
  patch(path, cb) {
    this.route.PATCH[path] = cb;
  }
  delete(path, cb) {
    this.route.DELETE[path] = cb;
  }
  getRouts() {
    return this.route;
  }
}

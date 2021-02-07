export default class Router {
  constructor() {
    this.route = {
      GET: {},
      POST: {},
      PUT: {},
      PATCH: {},
      DELETE: {}
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

import raw from "./rawData.js";
import _ from "lodash";

export default async () => {
  const html = raw("views");
  const css = raw("assets/css");
  const js = raw("assets/js");

  const draft = await Promise.all([html, css, js]);
  const data = _.zipObjectDeep(["html", "css", "js"], draft);
  return data;
};

import { promises as fs } from "fs";
import path from "path";
import _ from "lodash";

export default async (dirPath) => {
  let promDir;
  // let stats;

  promDir = await fs.readdir(dirPath);
  // stats = promDir.map((rout) => fs.stat(path.join(dirPath, rout)));
  const draft = promDir.map((rout) => fs.readFile(path.join(dirPath, rout)));
  const data = await Promise.all(draft);
  const res = _.zipObject(promDir, data);

  return res;
};

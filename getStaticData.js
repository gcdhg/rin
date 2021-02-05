import { promises as fs } from "fs";

export default async () => {
  return (await fs.readFile("./view/index.html")).toString();
};

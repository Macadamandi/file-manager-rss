import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import resolvePath from "../utils/getAbsolutePath.js";

const catFile = async (pathToFile) => {
  try {
    const targetPath = resolvePath(pathToFile);
    const fileStat = await stat(targetPath);

    if (fileStat.isDirectory()) {
      console.log("Operation failed: specified path is a directory");
      return;
    }

    const readStream = createReadStream(targetPath);

    await new Promise((resolve, reject) => {
      readStream.on("error", reject);
      readStream.on("end", () => {
        process.stdout.write("\n");
        resolve();
      });
      readStream.pipe(process.stdout);
    });
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default catFile;

import { createReadStream, createWriteStream } from "node:fs";
import { join, basename } from "node:path";
import { pipeline } from "node:stream/promises";
import { stat } from "node:fs/promises";
import resolvePath from "../utils/getAbsolutePath.js";

const copyFile = async (pathToFile, pathToNewDirectory) => {
  try {
    const sourcePath = resolvePath(pathToFile);
    const fileName = basename(sourcePath);
    const targetDirPath = resolvePath(pathToNewDirectory);
    const destinationPath = join(targetDirPath, fileName);

    const sourceExists = await stat(sourcePath)
      .then((stats) => stats.isFile())
      .catch(() => false);

    if (!sourceExists) {
      console.log(`Operation failed: source file ${sourcePath} does not exist`);
      return;
    }

    const dirExists = await stat(targetDirPath)
      .then((stats) => stats.isDirectory())
      .catch(() => false);

    if (!dirExists) {
      console.log(`Operation failed: target directory ${targetDirPath} does not exist`);
      return;
    }

    const fileExists = await stat(destinationPath)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      console.log(`Operation failed: file ${destinationPath} already exists`);
      return;
    }

    await pipeline(createReadStream(sourcePath), createWriteStream(destinationPath));
    console.log(`File ${sourcePath} was successfully copied to ${destinationPath}.`);
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default copyFile;

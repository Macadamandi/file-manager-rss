import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { stat, rm } from "node:fs/promises";
import { basename, join, extname } from "node:path";
import resolvePath from "../utils/getAbsolutePath.js";

const brotliDecompress = async (pathToFile, pathToDestination) => {
  try {
    const sourcePath = resolvePath(pathToFile);
    let destinationPath = resolvePath(pathToDestination);

    const sourceExists = await stat(sourcePath)
      .then((stats) => stats.isFile())
      .catch(() => false);

    if (!sourceExists) {
      console.log(`Operation failed: source file ${sourcePath} does not exist`);
      return;
    }

    if (extname(sourcePath) !== ".br") {
      console.log("Operation failed: file is not a Brotli-compressed (.br) file");
      return;
    }

    const baseName = basename(sourcePath, ".br");

    const destinationDirExists = await stat(destinationPath)
      .then((stats) => stats.isDirectory())
      .catch(() => false);

    if (destinationDirExists) {
      destinationPath = join(destinationPath, baseName);
    }

    const destinationFileExists = await stat(destinationPath)
      .then((stats) => stats.isFile())
      .catch(() => false);

    if (destinationFileExists) {
      console.log(`Operation failed: file ${destinationPath} already exists`);
      return;
    }

    await pipeline(createReadStream(sourcePath), createBrotliDecompress(), createWriteStream(destinationPath));

    console.log(`File ${sourcePath} was successfully decompressed to ${destinationPath}`);

    await rm(sourcePath);
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default brotliDecompress;

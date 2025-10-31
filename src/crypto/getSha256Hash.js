import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { pipeline } from "node:stream/promises";
import resolvePath from "../utils/getAbsolutePath.js";

const getSha256Hash = async (pathToFile) => {
  try {
    const sourcePath = resolvePath(pathToFile);

    const sourceExists = await stat(sourcePath)
      .then((stats) => stats.isFile())
      .catch(() => false);

    if (!sourceExists) {
      console.log(`Operation failed: source file ${sourcePath} does not exist`);
      return;
    }

    const hash = createHash("sha256");

    await pipeline(createReadStream(sourcePath), hash);

    console.log(`Hash SHA256 for file ${sourcePath}:\n${hash.digest("hex")}`);
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default getSha256Hash;

import { rename, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import resolvePath from "../utils/getAbsolutePath.js";

const renameFile = async (pathToFile, newFileName) => {
  try {
    const sourcePath = resolvePath(pathToFile);
    const dir = dirname(sourcePath);
    const destinationPath = join(dir, newFileName);

    const fileExists = await access(destinationPath)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      console.log(`Operation failed: file ${newFileName} already exists in ${dir}`);
    } else {
      await rename(sourcePath, destinationPath);
      console.log(`File ${sourcePath} renamed to ${destinationPath}.`);
    }
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default renameFile;

import { rm } from "node:fs/promises";
import resolvePath from "../utils/getAbsolutePath.js";

const removeFile = async (pathToFile) => {
  try {
    const sourcePath = resolvePath(pathToFile);

    await rm(sourcePath);
    console.log(`File ${sourcePath} was successfully deleted.`);
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default removeFile;

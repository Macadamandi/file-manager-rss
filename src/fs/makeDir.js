import { mkdir, access } from "node:fs/promises";
import resolvePath from "../utils/getAbsolutePath.js";

const makeDir = async (newDirectoryName) => {
  try {
    const targetPath = resolvePath(newDirectoryName);

    const folderExists = await access(targetPath)
      .then(() => true)
      .catch(() => false);

    if (folderExists) {
      console.log("Operation failed: folder already exists");
    } else {
      await mkdir(targetPath, { recursive: true });
      console.log(`Folder "${targetPath}" created successfully.`);
    }
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default makeDir;

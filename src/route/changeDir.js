import resolvePath from "../utils/getAbsolutePath.js";
import { userHomeDir } from "../utils/getDirectory.js";
import path from "node:path";

const changeDir = (inputPath) => {
  try {
    let targetPath;

    if (/^[a-zA-Z]:/.test(inputPath)) {
      targetPath = inputPath;
      if (!/[\\/]$/.test(targetPath)) targetPath += path.sep;
    } else {
      targetPath = resolvePath(inputPath);
    }

    const lowerTarget = targetPath.toLowerCase();
    const lowerHome = userHomeDir.toLowerCase();

    const homeDrive = lowerHome[0];
    const targetDrive = lowerTarget[0];

    if (targetDrive === homeDrive) {
      if (!lowerTarget.startsWith(lowerHome)) {
        console.log("Operation failed: cannot move above home directory.");
        return;
      }
    }

    process.chdir(targetPath);
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default changeDir;

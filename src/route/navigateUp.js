import { userHomeDir } from "../utils/getDirectory.js";
import resolvePath from "../utils/getAbsolutePath.js";

const navigateUp = () => {
  try {
    const targetPath = resolvePath("..");
    if (targetPath.startsWith(userHomeDir)) {
      process.chdir(targetPath);
    } else {
      console.log("Operation failed: cannot move above home directory.");
    }
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default navigateUp;

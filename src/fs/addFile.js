import { writeFile, access } from "node:fs/promises";
import resolvePath from "../utils/getAbsolutePath.js";

const addFile = async (newFileName) => {
  try {
    const targetPath = resolvePath(newFileName);

    const fileExists = await access(targetPath)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      console.log("Operation failed: file already exists");
    } else {
      await writeFile(targetPath, "");
      console.log(`File ${targetPath} created successfully.`);
    }
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default addFile;

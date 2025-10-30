import { readdir } from "node:fs/promises";

const listDir = async () => {
  try {
    const currentDir = process.cwd();
    const entries = await readdir(currentDir, { withFileTypes: true });
    const folders = entries.filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
    const files = entries.filter((entry) => entry.isFile()).sort((a, b) => a.name.localeCompare(b.name));
    const allItems = [...folders, ...files];

    const table = allItems.map((entry) => ({
      Name: entry.name,
      Type: entry.isDirectory() ? "directory" : "file",
    }));

    console.table(table);
  } catch (err) {
    console.log("Operation failed:", err.message);
  }
};

export default listDir;

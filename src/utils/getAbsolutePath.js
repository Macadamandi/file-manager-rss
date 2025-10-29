import path from "node:path";

const resolvePath = (targetPath) => path.resolve(process.cwd(), targetPath);

export default resolvePath;

import { arch } from "node:os";

const getArchitecture = () => {
  const cpuArch = arch();
  console.log(`CPU architecture Node.js: ${cpuArch}`);
};

export default getArchitecture;

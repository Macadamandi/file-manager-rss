import { homedir } from "node:os";

const userHomeDir = homedir();

const showCurrentDir = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

export { showCurrentDir, userHomeDir };

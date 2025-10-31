import cliHandler from "./src/cli/cliHandler.js";
import { userHomeDir, showCurrentDir } from "./src/utils/getDirectory.js";

const run = () => {
  const args = process.argv.slice(2);
  const usernameArg = args.find((arg) => arg.startsWith("--username="));
  const username = usernameArg ? usernameArg.split("=")[1] : "Guest";

  process.chdir(userHomeDir);

  console.log(`Welcome to the File Manager, ${username}!`);
  showCurrentDir();

  cliHandler(username);
};

run();

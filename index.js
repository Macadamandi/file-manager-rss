import cliHandler from "./src/cli/cliHandler.js";
import { userHomeDir, showCurrentDir } from "./src/utils/getHomeDir.js";

const run = () => {
  const args = process.argv.slice(2);
  const usernames = args
    .filter((arg) => arg.startsWith("--username="))
    .map((arg) => arg.split("=")[1])
    .filter(Boolean);

  let username;

  if (usernames.length > 0) {
    username = usernames[usernames.length - 1];
  } else {
    username = "Guest";
  }

  process.chdir(userHomeDir);

  console.log(`Welcome to the File Manager, ${username}!`);
  showCurrentDir();

  cliHandler(username);
};

run();

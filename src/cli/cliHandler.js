import showFarewellMessage from "../utils/farewellMessage.js";
import showInvalidInputMessage from "../utils/invalidInputMessage.js";
import { showCurrentDir } from "../utils/getDirectory.js";
import {
  ExitCommands,
  RouteCommands,
  FileOperationsCommands,
  OsInfoCommands,
  HashCommands,
  CompressionCommands,
  OS,
} from "../constants/commands.js";
import navigationHandler from "../route/navigateAndDirHandler.js";
import fileOperationsHandler from "../fs/basicFileOperationsHandler.js";
import osInfoHandler from "../os/osInfoHandler.js";
import hashCalculationHandler from "../crypto/hashCalculationHandler.js";
import compressionHandler from "../zlib/brotliCompressionHandler.js";

const exitCommands = Object.values(ExitCommands);
const routeCommands = Object.values(RouteCommands);
const fileCommands = Object.values(FileOperationsCommands);
const osCommands = Object.values(OsInfoCommands);
const hashCommands = Object.values(HashCommands);
const compressionCommands = Object.values(CompressionCommands);

const cliHandler = (username) => {
  const prompt = () => process.stdout.write("> ");

  prompt();

  process.stdin.on("data", async (chunk) => {
    const [command, ...args] = chunk.toString().trim().split(" ");

    switch (true) {
      case exitCommands.includes(command):
        showFarewellMessage(username);
        process.exit(0);
      case routeCommands.includes(command):
        await navigationHandler(command, args[0]);
        break;
      case fileCommands.includes(command):
        await fileOperationsHandler(command, args);
        break;
      case OS === command && osCommands.includes(args[0]):
        osInfoHandler(command, args[0]);
        break;
      case hashCommands.includes(command):
        hashCalculationHandler(command, args);
        break;
      case compressionCommands.includes(command):
        compressionHandler(command, args);
        break;
      default:
        showInvalidInputMessage();
    }

    showCurrentDir();
    prompt();
  });

  process.on("SIGINT", () => {
    showFarewellMessage(username);
    process.exit(0);
  });
};

export default cliHandler;

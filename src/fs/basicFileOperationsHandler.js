import { FileOperationsCommands } from "../constants/commands.js";
import showUnknownCommandMessage from "../utils/unknowCommandMessage.js";
import catFile from "./catFile.js";
import addFile from "./addFile.js";
import makeDir from "./makeDir.js";
import renameFile from "./renameFile.js";
import copyFile from "./copyFile.js";
import moveFile from "./moveFile.js";
import removeFile from "./removeFile.js";

const fileOperationsHandler = async (command, args) => {
  if (command === FileOperationsCommands.cat) await catFile(args[0]);
  else if (command === FileOperationsCommands.add) await addFile(args[0]);
  else if (command === FileOperationsCommands.mkdir) await makeDir(args[0]);
  else if (command === FileOperationsCommands.rn) await renameFile(args[0], args[1]);
  else if (command === FileOperationsCommands.cp) await copyFile(args[0], args[1]);
  else if (command === FileOperationsCommands.mv) await moveFile(args[0], args[1]);
  else if (command === FileOperationsCommands.rm) await removeFile(args[0]);
  else showUnknownCommandMessage(command);
};

export default fileOperationsHandler;

import { FileOperationsCommands } from "../constants/commands.js";
import catFile from "./catFile.js";

const fileOperationsHandler = (command, args) => {
  if (command === FileOperationsCommands.cat) catFile(args);
  if (command === FileOperationsCommands.add) addFile(args);
  if (command === FileOperationsCommands.mkdir) makeDir(args);
  if (command === FileOperationsCommands.rn) renameFile(args);
  if (command === FileOperationsCommands.cp) copyFile(args);
  if (command === FileOperationsCommands.mv) moveFile(args);
  if (command === FileOperationsCommands.rm) removeFile(args);
};

export default fileOperationsHandler;

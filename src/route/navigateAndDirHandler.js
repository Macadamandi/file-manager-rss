import { RouteCommands } from "../constants/commands.js";
import showUnknownCommandMessage from "../utils/unknowCommandMessage.js";
import listDir from "./listDir.js";
import changeDir from "./changeDir.js";
import navigateUp from "./navigateUp.js";

const navigationHandler = async (command, args) => {
  if (command === RouteCommands.up) {
    navigateUp();
  } else if (command === RouteCommands.ls) {
    await listDir();
  } else if (command === RouteCommands.cd) {
    changeDir(args);
  } else {
    showUnknownCommandMessage(command);
  }
};

export default navigationHandler;

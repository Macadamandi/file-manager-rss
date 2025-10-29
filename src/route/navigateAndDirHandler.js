import { RouteCommands } from "../constants/commands.js";
import listDir from "./listDir.js";
import changeDir from "./changeDir.js";
import navigateUp from "./navigateUp.js";

const navigationHandler = async (command, args) => {
  if (command === RouteCommands.up) navigateUp();
  if (command === RouteCommands.ls) await listDir();
  if (command === RouteCommands.cd) changeDir(args);
};

export default navigationHandler;

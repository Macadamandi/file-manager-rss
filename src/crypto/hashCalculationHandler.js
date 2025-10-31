import { HashCommands } from "../constants/commands.js";
import getSha256Hash from "./getSha256Hash.js";
import showUnknownCommandMessage from "../utils/unknowCommandMessage.js";

const hashCalculationHandler = async (command, args) => {
  if (command === HashCommands.hash) await getSha256Hash(args[0]);
  else showUnknownCommandMessage();
};

export default hashCalculationHandler;

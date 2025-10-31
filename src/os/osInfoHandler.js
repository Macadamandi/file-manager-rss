import { OsInfoCommands } from "../constants/commands.js";
import showUnknownCommandMessage from "../utils/unknowCommandMessage.js";
import getEol from "./getEol.js";
import getCpus from "./getCpus.js";
import getHomedir from "./getHomedir.js";
import getUsername from "./getUsername.js";
import getArchitecture from "./getArchitecture.js";

const osInfoHandler = (args) => {
  if (args === OsInfoCommands.eol) getEol();
  else if (args === OsInfoCommands.cpus) getCpus();
  else if (args === OsInfoCommands.homedir) getHomedir();
  else if (args === OsInfoCommands.username) getUsername();
  else if (args === OsInfoCommands.architecture) getArchitecture();
  else showUnknownCommandMessage();
};

export default osInfoHandler;

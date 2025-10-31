import { CompressionCommands } from "../constants/commands.js";
import showUnknownCommandMessage from "../utils/unknowCommandMessage.js";
import brotliCompress from "./brotliCompress.js";
import brotliDecompress from "./brotliDecompress.js";

const compressionHandler = async (command, args) => {
  if (command === CompressionCommands.compress) await brotliCompress(args[0], args[1]);
  else if (command === CompressionCommands.decompress) await brotliDecompress(args[0], args[1]);
  else showUnknownCommandMessage();
};

export default compressionHandler;

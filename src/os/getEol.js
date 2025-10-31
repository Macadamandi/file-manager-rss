import { EOL } from "node:os";

const getEol = () => {
  const eol = JSON.stringify(EOL);
  console.log(`Default system End-Of-Line: ${eol}`);
};

export default getEol;

#!/ust/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.s) {
    // save city
  }
  if (args.h) {
    printHelp();
  }
  if (args.t) {
    // save token
  }

  // show weather
};

initCli();

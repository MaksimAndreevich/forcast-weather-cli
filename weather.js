#!/ust/bin/env node
import { getArgs } from "./helpers/args.js";

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.s) {
    // save city
  }
  if (args.h) {
    // show help
  }
  if (args.t) {
    // save token
  }

  // show weather
};

initCli();
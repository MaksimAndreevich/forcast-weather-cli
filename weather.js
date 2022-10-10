#!/ust/bin/env node
import { getArgs } from "./helpers/args.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import { saveKeyValue, getKeyValue } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token not passed");
    return;
  }
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved");
  } catch (e) {
    printError(`"Token not saved" ${e.message}`);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City not passed");
    return;
  }
  try {
    await saveKeyValue("city", city);
    printSuccess("City saved");
  } catch (e) {
    printError(`"City not saved" ${e.message}`);
  }
};

const getForcasst = async () => {
  try {
    const city = await getKeyValue("city");
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (er) {
    if (er?.response?.status == 404) {
      printError("City not found");
    } else if (er?.response?.status == 401) {
      printError("API key not found");
    } else {
      printError(er.message);
    }
  }
};

const initCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }
  if (args.t) {
    return saveToken(args.t);
  }
  if (args.s) {
    return saveCity(args.s);
  }
  return getForcasst();
};

initCli();

import chalk from "chalk";
import dedent from "dedent-js";
import { getIcon } from "./api.service.js";

const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent(
      `${chalk.bgCyan(" HELP ")}
        No parametrs - Show weather
        -s [CITY] for save city
        -h for show help
        -t [API_KEY] for save token`
    )
  );
};

const printWeather = (forcast) => {
  const { weather, main, name, wind } = forcast;
  const icon = getIcon(weather[0].icon)
  console.log(
    dedent(`${chalk.bgYellow(" WEATHER ")} ${icon}
    It's ${weather[0].description} in ${name} right now.
    Temperature ${Math.trunc(main.temp)} (feels like ${Math.trunc(main.feels_like)})
    Wind Speed: ${Math.trunc(wind.speed)} m/c`)
  );
};

export { printError, printSuccess, printHelp, printWeather };

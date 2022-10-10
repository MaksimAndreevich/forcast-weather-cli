import chalk from "chalk";
import dedent from "dedent-js";

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

export { printError, printSuccess, printHelp };

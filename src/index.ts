import config from "config";
import logger from "logger";
import { server } from "server";

function startServer() {
  server.listen({ port: config.PORT, host: config.HOST });
  logger.info(`Running at http://${config.HOST}:${config.PORT}`);
}

process.on("unhandledRejection", (err) => {
  if (err) {
    logger.error(err);
  }
  process.exit(1);
});

function main() {
  startServer();
}
logger.info(`From ${__dirname}/index.ts`);
main();

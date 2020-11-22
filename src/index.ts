import config from "./config";
import logger from "./logger";
import server from "./server";

async function startServer() {
  await server.listen({ port: config.PORT, host: config.HOST });
  logger.info(`Running at http://${config.HOST}:${config.PORT}`);
}

process.on("unhandledRejection", (err) => {
  if (err) {
    logger.error(err);
  }
  process.exit(1);
});

async function main() {
  await startServer();
}

main();

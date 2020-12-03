import * as dotenv from "dotenv";

const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 3000;
const DEFAULT_LOG_FILE = "app.log";
const DEFAULT_ROUTE_PREFIX = "";

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  APP_NAME: process.env.APP_NAME,
  HOST: process.env.HOST || DEFAULT_HOST,
  PORT: process.env.PORT || DEFAULT_PORT,
  LOG_FILE: process.env.LOG_FILE || DEFAULT_LOG_FILE,
  ROUTE_PREFIX: process.env.ROUTE_PREFIX || DEFAULT_ROUTE_PREFIX
};

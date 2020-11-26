import * as dotenv from "dotenv";

const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 3000;

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  APP_NAME: process.env.APP_NAME,
  HOST: process.env.HOST || DEFAULT_HOST,
  PORT: process.env.PORT || DEFAULT_PORT
};

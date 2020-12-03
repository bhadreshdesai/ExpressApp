import "reflect-metadata";
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { useExpressServer } from "routing-controllers";
import logger from "logger";
import config from "config";

export const server: Application = express();
//server.use(morgan("combined", { stream: logger.stream }));
server.use(
  morgan("tiny", {
    stream: {
      write: (str: string) => {
        logger.info(str);
      }
    }
  })
);

const routePrefix: string = config.ROUTE_PREFIX;
const controllersDir: string = __dirname + "/../controllers/*.ts";

useExpressServer(server, {
  routePrefix: routePrefix,
  controllers: [controllersDir],
  defaults: {
    //with this option, null will return 404 by default
    nullResultCode: 404
  }
});

server.use(function (req: Request, res: Response, next: NextFunction) {
  if (!res.finished) {
    res.status(404).json({
      status: 404,
      message: `Cannot ${req.method} ${req.url}`
    });
  }
  res.end();
});

/*
server.use(function (req: Request, res: Response, next: NextFunction) {
  res.status(404).send("404 - Not found");
});
*/
/*
server.use("/", (_req, res) => {
  res.status(200).json({
    greetings: "Hello from server.ts",
    current_time: new Date().toLocaleString(),
    uptime: process.uptime()
  });
});
*/

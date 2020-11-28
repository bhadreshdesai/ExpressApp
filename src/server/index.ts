import express, { Application } from "express";

export const server: Application = express();

server.use("/", (_req, res) => {
  res.status(200).json({
    greetings: "Hello from server.ts",
    current_time: new Date().toLocaleString(),
    uptime: process.uptime()
  });
});

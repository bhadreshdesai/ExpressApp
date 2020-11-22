import express from "express";

const server = express();

server.use("/", (_req, res) => {
  res.status(200).json({
    greetings: "Hello from server.ts !!",
    current_time: new Date().toLocaleString(),
    uptime: process.uptime()
  });
});

export default server;

import { JsonController, Get } from "routing-controllers";

@JsonController()
export class HomeController {
  @Get("/")
  get() {
    return {
      greetings: "Hello from HomeController.ts",
      current_time: new Date().toLocaleString(),
      uptime: process.uptime()
    };
  }
}

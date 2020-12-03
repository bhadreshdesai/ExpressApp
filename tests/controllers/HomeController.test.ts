import request from "supertest";
import { server } from "server";
import config from "config";

describe("HomeController Tests", () => {
  it(`Get ${config.ROUTE_PREFIX}/`, async () => {
    const result = await request(server).get(`${config.ROUTE_PREFIX}/`).send();
    expect(result.status).toBe(200);
    expect(result.body.uptime).toBeGreaterThan(0);
    expect(result.body.greetings).toBe("Hello from HomeController.ts");
  });
});

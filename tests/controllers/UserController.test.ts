import request from "supertest";
import { server } from "server";
import config from "config";

describe("UserController Tests", () => {
  it("Get All Users", async () => {
    const result = await request(server)
      .get(`${config.ROUTE_PREFIX}/users`)
      .send();
    expect(result.status).toBe(200);
    expect(result.body.length).toBe(3);
  });

  it("Get specific user", async () => {
    const result = await request(server)
      .get(`${config.ROUTE_PREFIX}/users/1`)
      .send();
    expect(result.status).toBe(200);
    expect(result.body.id).toBe(1);
    expect(result.body.name).toBe("One");
  });

  it("Get non existent user", async () => {
    const result = await request(server)
      .get(`${config.ROUTE_PREFIX}/users/999`)
      .send();
    expect(result.status).toBe(404);
    console.log(result.body);
    /*
    ToDo: 404 returns development mode stack trace in the response
    How to send a customer response?
    {
      name: "NotFoundError",
      stack:
        "Error: \n    at NotFoundError.HttpError [as constructor] (/src/http-error/HttpError.ts:19:22)\n    at new NotFoundError (/src/http-error/NotFoundError.ts:10:9)\n at ExpressDriver.Object.<anonymous>.ExpressDriver.handleSuccess (/src/driver/express/ExpressDriver.ts:332:23)\n    at /src/RoutingControllers.ts:160:45\n    at process._tickCallback (internal/process/next_tick.js:68:7)"
    };
    */
  });
});

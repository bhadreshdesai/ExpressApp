import request from "supertest";
import { server } from "server";

describe("Server Test", () => {
  it("Server root access", async () => {
    const result = await request(server).get("/").send();
    console.log(result.body);
  });
});

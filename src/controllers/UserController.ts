import { JsonController, Get, Param, NotFoundError } from "routing-controllers";

interface User {
  id: number;
  name: string;
}

@JsonController("/users")
export class UserController {
  users: User[] = [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" }
  ];

  @Get("/")
  getAll() {
    return this.users;
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    const user = this.users.find((e) => e.id === id);
    //if (!user) throw new NotFoundError(`User was not found ...`); // message is optional
    return user;
  }
}

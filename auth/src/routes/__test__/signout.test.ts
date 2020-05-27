import request from "supertest";

import { app } from "../../app";

it("should clear the cookie after successful signin and successful signout", async () => {
  let response;

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "zzz@zz.com",
      password: "zz123",
    })
    .expect(201);

  response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "zzz@zz.com",
      password: "zz123",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();

  response = await request(app).post("/api/users/signout").send({}).expect(200);

  expect(response.get("Set-Cookie")[0]).toEqual(
    "express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});

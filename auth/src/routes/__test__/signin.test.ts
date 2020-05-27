import request from "supertest";

import { app } from "../../app";

it("should return 400 if signin with an email that is not previouly supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "xxx@xxx.com",
      password: "yyyyyy",
    })
    .expect(400);
});

it("should return 400 if signin with the wrong password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "xxx@xx.com",
      password: "xxx123",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "xxx@xx.com",
      password: "yyy123",
    })
    .expect(400);
});

it("should return a cookie if successfully signed in", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "yyy@yy.com",
      password: "yy123",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "yyy@yy.com",
      password: "yy123",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});

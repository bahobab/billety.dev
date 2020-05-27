import request from "supertest";

import { app } from "../../app";

it("should return 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "kool@test.dev", password: "kool123" })
    .expect(201);
});

it("should return 400 if signup with invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "xxxxxxx", password: "kool123" })
    .expect(400);
});

it("should return 400 if signup with invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "mmm@test.dev", password: "3" })
    .expect(400);
});

it("should return 400 if signup with empty email and empty password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "", password: "" })
    .expect(400);

  await request(app)
    .post("/api/users/signup")
    .send({ email: "mm@dkd.lf" })
    .expect(400);

  return request(app)
    .post("/api/users/signup")
    .send({ password: "wwwwwww" })
    .expect(400);
});

it("should not allow to signup with existing email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "mmm@test.dev", password: "39999" })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({ email: "mmm@test.dev", password: "ddododod" })
    .expect(400);
});

it("sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({ email: "mmm@test.dev", password: "39999" })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});

import { currentUser } from "../../../../common/src/middlewares/current-user";
import request from "supertest";

import { app } from "../../app";

it("should respond with details about the currently signed-in user", async () => {
  const cookie = await global.signup();

  const response = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual("test@test.com");
});

it("should return null for current user if not authenticated", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});

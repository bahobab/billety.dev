import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  console.log("CLIENT: starting up..!");

  if (!process.env.JWT_SECRET) {
    throw new Error("Error: JWT secret not defined!");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI not defined!");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("AUTH Connected to mongodb...");
  } catch (error) {
    console.log(error);
  }
};

app.listen(3000, () => console.log("AUTH listening on port 3000...!"));

start();

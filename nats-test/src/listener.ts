import nats from "node-nats-streaming";
import { randomBytes } from "crypto";

import { TicketCreatedListener } from "./events/ticket-created-listener";

console.clear();

const stan = nats.connect("billety", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS");

  stan.on("close", () => {
    console.log("NATS connection closed");
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

process.on("SIGINT", () => stan.close()); // not working well on Windows
process.on("SIGTERM", () => stan.close()); // not working well on Windows

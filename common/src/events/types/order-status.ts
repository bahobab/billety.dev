export enum OrderStatus {
  // when order has been created BUT ticket it is TRYING to order has NOT BEEN RESERVED
  Created = "created",

  // the ticket the order is TRYING to reserve has ALREADY BEEN RESERVED,
  // or the USER has CANCELLED the order,
  // or the order EXPIRES before payment
  Cancelled = "cancelled",

  // the order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  // the order has reserved the ticket and the user has provided payment successfully
  Complete = "complete",
}

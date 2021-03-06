"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    // when order has been created BUT ticket it is TRYING to order has NOT BEEN RESERVED
    OrderStatus["Created"] = "created";
    // the ticket the order is TRYING to reserve has ALREADY BEEN RESERVED,
    // or the USER has CANCELLED the order,
    // or the order EXPIRES before payment
    OrderStatus["Cancelled"] = "cancelled";
    // the order has successfully reserved the ticket
    OrderStatus["AwaitingPayment"] = "awaiting:payment";
    // the order has reserved the ticket and the user has provided payment successfully
    OrderStatus["Complete"] = "complete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));

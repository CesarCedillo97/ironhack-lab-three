import { PaymentProcessor } from "./PaymentProcessor";

export class ConsolePaymentProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Processing payment for total:", amount);
  }
}

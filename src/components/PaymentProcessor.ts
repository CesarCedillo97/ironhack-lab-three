export interface PaymentProcessor {
  processPayment(amount: number): void;
}

import { CartItem } from "./CartItem";
import { PaymentProcessor } from "./PaymentProcessor";
import { PricingStrategy } from "./PricingStrategy";

export class ShoppingCart {
  private items: CartItem[] = [];

  constructor(
    private pricingStrategy: PricingStrategy,
    private paymentProcessor: PaymentProcessor
  ) {}

  addItem(name: string, price: number, quantity: number): void {
    this.items.push({ name, price, quantity });
  }

  calculateTotal(): number {
    return this.pricingStrategy.calculateTotal(this.items);
  }

  checkout(): void {
    const total = this.calculateTotal();
    this.paymentProcessor.processPayment(total);
  }
}

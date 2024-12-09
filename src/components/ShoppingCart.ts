import { CartItem } from "./CartItem";
import { PricingStrategy } from "./PricingStrategy";
import { PaymentProcessor } from "./PaymentProcessor";

export class ShoppingCart {
  private items: CartItem[] = [];

  constructor(
    private pricingStrategy: PricingStrategy,
    private paymentProcessor: PaymentProcessor
  ) {}

  addItem(name: string, price: number, quantity: number): void {
    this.items.push({ name, price, quantity });
    console.log(`Item added: ${name} (${quantity} x $${price})`);
  }

  calculateTotal(): number {
    return this.pricingStrategy.calculateTotal(this.items);
  }

  checkout(): void {
    const total = this.calculateTotal();
    this.paymentProcessor.processPayment(total);
  }
}

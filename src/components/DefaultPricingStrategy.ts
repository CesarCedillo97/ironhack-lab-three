import { CartItem } from "./CartItem";
import { PricingStrategy } from "./PricingStrategy";

export class DefaultPricingStrategy implements PricingStrategy {
  calculateTotal(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}

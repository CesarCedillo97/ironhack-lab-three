import { CartItem } from "./CartItem";

export interface PricingStrategy {
  calculateTotal(items: CartItem[]): number;
}

import { CartItem } from "../models/CartItem";

export class CartService {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
    console.log("Adding item to cart: ", item);
    this.items.push(item);
  }

  removeItem(item: CartItem): void {
    const index = this.items.findIndex((i) => i.name === item.name);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updateItem(item: CartItem): void {
    const index = this.items.findIndex((i) => i.name === item.name);
    if (index !== -1) {
      this.items[index] = item;
    }
  }

  getItems(): CartItem[] {
    return [...this.items];
  }
}

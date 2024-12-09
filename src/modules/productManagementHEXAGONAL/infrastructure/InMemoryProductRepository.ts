import { ProductRepository } from "../domain/ProductRepository";
import { Product } from "../domain/Product";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  findAll(): Product[] {
    return [...this.products];
  }

  findById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  save(product: Product): void {
    this.products.push(product);
  }
}

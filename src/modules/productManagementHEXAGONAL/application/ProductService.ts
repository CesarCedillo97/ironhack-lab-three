import { ProductRepository } from "../domain/ProductRepository";
import { Product } from "../domain/Product";

export class ProductService {
  constructor(private repository: ProductRepository) {}

  getAllProducts(): Product[] {
    return this.repository.findAll();
  }

  addProduct(product: Product): void {
    this.repository.save(product);
  }
}

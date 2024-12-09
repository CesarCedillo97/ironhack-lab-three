import { Product } from "../model/Product";

export class ProductCatalogViewModel {
  private products: Product[] = [];

  getProducts(): Product[] {
    return [...this.products];
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}

import { Product } from "./Product";

export interface ProductRepository {
  findAll(): Product[];
  findById(id: string): Product | undefined;
  save(product: Product): void;
}

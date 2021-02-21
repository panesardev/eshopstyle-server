import { Product } from "src/models/product.model";
export interface Collection {
    name: string;
    products: Product[];
}

import { Product } from "src/product/product.model";

export interface Collection {
	name: string;
	products: Product[];
}
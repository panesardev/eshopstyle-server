import { Model } from 'mongoose';
import { Product, ProductDoc } from './product.model';
export declare class ProductService {
    private ProductDoc;
    constructor(ProductDoc: Model<ProductDoc>);
    save(product: Product): Promise<Product>;
    find(id: string): Promise<Product>;
    findByCollection(collectionName: string): Promise<Product[]>;
    findAll(): Promise<Product[]>;
    update(product: Product): Promise<Product>;
    delete(id: string): Promise<boolean>;
}

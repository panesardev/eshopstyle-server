import { ProductService } from 'src/product/product.service';
import { Collection } from './collection.model';
export declare class CollectionService {
    private readonly productService;
    constructor(productService: ProductService);
    get(name: string): Promise<Collection>;
    getFeatured(): Promise<Collection>;
    getAll(): Promise<Collection>;
}

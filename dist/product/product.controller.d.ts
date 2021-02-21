import { Product } from './product.model';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    saveProduct(product: Product): Promise<Product>;
    findProduct(id: string): Promise<Product>;
    findProducts(): Promise<Product[]>;
    updateProduct(product: Product): Promise<Product>;
    deleteProduct(id: string): Promise<any>;
}

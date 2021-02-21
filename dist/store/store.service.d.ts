import { HttpService } from '@nestjs/common';
import { StoreProduct } from './store-product.model';
export declare class StoreService {
    private http;
    private URL;
    constructor(http: HttpService);
    getProducts(): Promise<StoreProduct[]>;
    getProductsOfCategory(category: string): Promise<StoreProduct[]>;
}

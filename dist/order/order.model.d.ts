import { Document } from 'mongoose';
import { Product } from 'src/product/product.model';
export declare type OrderDoc = Order & Document;
export declare class Order {
    id: string;
    orderPlaceTime: string;
    email: string;
    address: string;
    totalPrice: number;
    products: Product[];
}
export declare const OrderSchema: import("mongoose").Schema<Document<Order>, import("mongoose").Model<Document<Order>>>;

import { Document } from 'mongoose';
export declare type ProductDoc = Product & Document;
export interface Review {
    name: string;
    timeStamp: string;
    content: string;
}
export declare class Product {
    id?: string;
    name: string;
    pictureURL: string;
    price: number;
    reviews?: Review[];
    description: string;
    collectionName: string;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product>, import("mongoose").Model<Document<Product>>>;

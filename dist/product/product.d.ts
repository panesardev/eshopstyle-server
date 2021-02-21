export declare type Gender = 'm' | 'f';
export declare type ProductType = 'shoe' | 'shirt' | 't-shirt' | 'jean' | 'jogger' | 'short';
export interface Product {
    id?: string;
    name: string;
    pictureURL: string;
    price: number;
    quantity: number;
    stars?: number;
    gender?: Gender;
    reviews?: Review[];
    description: string;
    type: ProductType;
    collectionName: string;
}
export interface Review {
    name: string;
    timeStamp: string;
    content: string;
    stars?: number;
}

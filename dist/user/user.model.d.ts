import { Document } from 'mongoose';
export declare type UserDoc = User & Document;
export declare class User {
    id: string;
    email: string;
    username: string;
    password: string;
    name: string;
    address?: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User>, import("mongoose").Model<Document<User>>>;

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDoc = Product & Document;

export interface Review {
	name: string;
	timeStamp: string;
	content: string;
}	

@Schema()
export class Product {
	@Prop()
	id?: string;
	
	@Prop({ required: true })
	name: string;
	
	@Prop({ required: true })
	pictureURL: string;
	
	@Prop({ required: true })
	price: number;
	
	@Prop()
	reviews?: Review[];
	
	@Prop({ required: true })
	description: string;
	
	@Prop({ required: true })
	collectionName: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/product/product.model';

export type OrderDoc = Order & Document;

@Schema()
export class Order {
	@Prop({ required: true })
	id: string;
	
	@Prop({ required: true })
	orderPlaceTime: string;
	
	@Prop({ required: true })
	email: string;
	
	@Prop({ required: true })
	address: number;
	
	@Prop({ required: true })
	totalPrice: number;
	
	@Prop({ required: true })
	products: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
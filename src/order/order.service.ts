import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDoc } from './order.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrderService {

	constructor(@InjectModel(Order.name) private OrderDoc: Model<OrderDoc>) { }

	async update(order: Order): Promise<Order> {
		return this.OrderDoc.updateOne({ id: order.id }, { ...order }).exec();
	}
	
	async delete(id: string): Promise<any> {
		return this.OrderDoc.deleteOne({ id }).exec();
	}
	
	async find(id: string): Promise<Order> {
		return this.OrderDoc.find({ id }).exec()[0];
	}
	
	async findAll(): Promise<Order[]> {
		return this.OrderDoc.find().exec();
	}
	
	async save(order: Order): Promise<Order> {
		order.id = uuid();
		return new this.OrderDoc(order).save();
	}

	async findByEmail(email: string): Promise<Order[]> {
		return this.OrderDoc.find({ email }).exec();
	}
}

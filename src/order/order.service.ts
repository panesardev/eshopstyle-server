import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDoc } from './order.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrderService {

	constructor(@InjectModel(Order.name) private OrderDoc: Model<OrderDoc>) { }

	async update(order: Order) {
		return this.OrderDoc.find({ id: order.id }, { ...order }).exec();
	}
	
	async delete(id: string) {
		return this.OrderDoc.deleteOne({ id }).exec();
	}
	
	async find(id: string) {
		return this.OrderDoc.find({ id }).exec();
	}
	
	async findAll() {
		return this.OrderDoc.find().exec();
	}
	
	async save(order: Order) {
		order.id = uuid();
		return new this.OrderDoc(order).save();
	}
}

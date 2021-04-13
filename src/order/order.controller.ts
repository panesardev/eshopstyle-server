import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { Order } from './order.model';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

	constructor(private readonly orderService: OrderService) { }

	@Post()
	async saveOrder(@Body() order: Order) {
		if (order.id) throw new HttpException('Order Already Placed', 400);
		return await this.orderService.save(order);
	}

	@Get()
	async getOrders() {
		return await this.orderService.findAll();
	}

	@Get('/:id')
	async getOrder(@Param('id') id: string) {
		return await this.orderService.find(id);
	}

	@Delete('/:id')
	async deleteOrder(@Param('id') id: string) {
		return await this.orderService.delete(id);
	}

	@Put()
	async updateOrder(@Body() order: Order) {
		return await this.orderService.update(order);
	}

	@Get('/email/:email')
	async getOrderByEmail(@Param('email') email: string) {
		return await this.orderService.findByEmail(email);
	}
	
}

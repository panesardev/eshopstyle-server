import { Model } from 'mongoose';
import { Order, OrderDoc } from './order.model';
export declare class OrderService {
    private OrderDoc;
    constructor(OrderDoc: Model<OrderDoc>);
    update(order: Order): Promise<Order>;
    delete(id: string): Promise<any>;
    find(id: string): Promise<Order>;
    findAll(): Promise<Order[]>;
    save(order: Order): Promise<Order>;
    findByEmail(email: string): Promise<Order[]>;
}

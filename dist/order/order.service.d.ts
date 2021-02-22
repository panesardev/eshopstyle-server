import { Model } from 'mongoose';
import { Order, OrderDoc } from './order.model';
export declare class OrderService {
    private OrderDoc;
    constructor(OrderDoc: Model<OrderDoc>);
    update(order: Order): Promise<OrderDoc[]>;
    delete(id: string): Promise<any>;
    find(id: string): Promise<OrderDoc[]>;
    findAll(): Promise<OrderDoc[]>;
    save(order: Order): Promise<OrderDoc>;
}

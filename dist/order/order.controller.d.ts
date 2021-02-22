import { Order } from './order.model';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    saveOrder(order: Order): Promise<import("./order.model").OrderDoc>;
    getOrders(): Promise<import("./order.model").OrderDoc[]>;
    getOrder(id: string): Promise<import("./order.model").OrderDoc[]>;
    deleteOrder(id: string): Promise<any>;
    updateOrder(order: Order): Promise<import("./order.model").OrderDoc[]>;
}

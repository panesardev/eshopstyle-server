import { Order } from './order.model';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    saveOrder(order: Order): Promise<Order>;
    getOrders(): Promise<Order[]>;
    getOrder(id: string): Promise<Order>;
    deleteOrder(id: string): Promise<any>;
    updateOrder(order: Order): Promise<Order>;
    getOrderByEmail(email: string): Promise<Order[]>;
}

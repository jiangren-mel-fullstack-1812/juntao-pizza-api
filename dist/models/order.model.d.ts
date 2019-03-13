import { Entity } from '@loopback/repository';
import { OrderItem } from '../models/order-item.model';
export declare class Order extends Entity {
    id?: string;
    userName: string;
    orderItems: OrderItem[];
    status?: string;
    constructor(data?: Partial<Order>);
}

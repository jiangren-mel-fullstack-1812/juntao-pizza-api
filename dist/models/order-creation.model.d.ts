import { Model } from '@loopback/repository';
import { OrderItem } from '../models';
export declare class OrderCreation extends Model {
    userName: string;
    orderItems: OrderItem[];
    constructor(data?: Partial<OrderCreation>);
}

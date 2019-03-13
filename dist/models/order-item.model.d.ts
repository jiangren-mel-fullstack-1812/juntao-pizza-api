import { Model } from '@loopback/repository';
export declare class OrderItem extends Model {
    productId: string;
    productName?: string;
    price: number;
    quantity: number;
    constructor(data?: Partial<OrderItem>);
}

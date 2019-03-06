import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: string;
    name: string;
    price: number;
    type?: string;
    imageUrl?: string;
    constructor(data?: Partial<Product>);
}

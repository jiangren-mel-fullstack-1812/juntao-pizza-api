import { Entity } from '@loopback/repository';
/**
 * The model class is generated from OpenAPI schema - Product
 * Product
 */
export declare class Product extends Entity {
    constructor(data?: Partial<Product>);
    /**
     *
     */
    id?: string;
    /**
     *
     */
    name: string;
    /**
     *
     */
    price: number;
    type?: string;
}

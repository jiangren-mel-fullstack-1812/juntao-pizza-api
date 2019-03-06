import { Entity } from '@loopback/repository';
export declare class Topping extends Entity {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    toppingListId: number;
    constructor(data?: Partial<Topping>);
}

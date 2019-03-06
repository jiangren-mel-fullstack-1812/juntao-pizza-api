import { Topping } from './topping.model';
import { Entity } from '@loopback/repository';
export declare class ToppingList extends Entity {
    id?: number;
    toppings?: Topping[];
    constructor(data?: Partial<ToppingList>);
}

import { ToppingListRepository } from '../repositories';
import { Topping } from '../models';
export declare class ToppingListToppingController {
    protected toppingListRepository: ToppingListRepository;
    constructor(toppingListRepository: ToppingListRepository);
    create(id: number, topping: Topping): Promise<Topping>;
}

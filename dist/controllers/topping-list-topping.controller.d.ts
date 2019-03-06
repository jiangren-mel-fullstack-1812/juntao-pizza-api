import { ToppingListRepository } from '../repositories';
import { Topping } from '../models';
export declare class TodoListTodoController {
    protected toppingListRepo: ToppingListRepository;
    constructor(toppingListRepo: ToppingListRepository);
    create(id: number, topping: Topping): Promise<Topping>;
}

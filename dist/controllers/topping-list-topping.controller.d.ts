import { ToppingListRepository } from '../repositories';
import { Topping } from '../models';
export declare class TodoListTodoController {
    protected toppingListRepository: ToppingListRepository;
    constructor(toppingListRepository: ToppingListRepository);
    create(id: number, topping: Topping): Promise<Topping>;
}

import { Count, Filter, Where } from '@loopback/repository';
import { ToppingList } from '../models';
import { ToppingListRepository } from '../repositories';
export declare class ToppingListController {
    toppingListRepository: ToppingListRepository;
    constructor(toppingListRepository: ToppingListRepository);
    create(toppingList: ToppingList): Promise<ToppingList>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<ToppingList[]>;
    updateAll(toppingList: ToppingList, where?: Where): Promise<Count>;
    findById(id: number): Promise<ToppingList>;
    updateById(id: number, toppingList: ToppingList): Promise<void>;
    replaceById(id: number, toppingList: ToppingList): Promise<void>;
    deleteById(id: number): Promise<void>;
}

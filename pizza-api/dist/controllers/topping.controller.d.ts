import { Count, Filter, Where } from '@loopback/repository';
import { Topping } from '../models';
import { ToppingRepository } from '../repositories';
export declare class ToppingController {
    toppingRepository: ToppingRepository;
    constructor(toppingRepository: ToppingRepository);
    create(topping: Topping): Promise<Topping>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Topping[]>;
    updateAll(topping: Topping, where?: Where): Promise<Count>;
    findById(id: number): Promise<Topping>;
    updateById(id: number, topping: Topping): Promise<void>;
    replaceById(id: number, topping: Topping): Promise<void>;
    deleteById(id: number): Promise<void>;
}

import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { Topping, ToppingList } from '../models';
import { ToppingRepository } from './topping.repository';
export declare class ToppingListRepository extends DefaultCrudRepository<ToppingList, typeof ToppingList.prototype.id> {
    protected toppingRepositoryGetter: Getter<ToppingRepository>;
    readonly toppings: HasManyRepositoryFactory<Topping, typeof ToppingList.prototype.id>;
    constructor(dataSource: DbDataSource, toppingRepositoryGetter: Getter<ToppingRepository>);
}

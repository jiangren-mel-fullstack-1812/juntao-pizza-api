import { DefaultCrudRepository } from '@loopback/repository';
import { Topping } from '../models';
import { DbDataSource } from '../datasources';
export declare class ToppingRepository extends DefaultCrudRepository<Topping, typeof Topping.prototype.id> {
    constructor(dataSource: DbDataSource);
}

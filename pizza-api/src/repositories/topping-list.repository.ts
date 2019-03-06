import {
  DefaultCrudRepository, 
  HasManyRepositoryFactory,
  juggler,
  repository,
} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Getter, inject} from '@loopback/core';
import {Topping, ToppingList} from '../models';
import {ToppingRepository} from './topping.repository';

export class ToppingListRepository extends DefaultCrudRepository<
  ToppingList,
  typeof ToppingList.prototype.id
> {
  public readonly toppings: HasManyRepositoryFactory<
    Topping,
    typeof ToppingList.prototype.id
  >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter(ToppingRepository)
    protected toppingRepositoryGetter: Getter<ToppingRepository>,
  ) {
    super(ToppingList, dataSource);
    this.toppings = this.createHasManyRepositoryFactoryFor(
      'toppings',
      toppingRepositoryGetter,
    );
  }
}

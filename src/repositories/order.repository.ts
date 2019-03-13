import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Order } from '../models/order.model';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Order, dataSource);
  }
}

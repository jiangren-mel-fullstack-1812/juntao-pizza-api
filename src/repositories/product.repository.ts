import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Product } from '../models/product.model';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Product, dataSource);
  }
}

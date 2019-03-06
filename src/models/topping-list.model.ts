import {hasMany} from '@loopback/repository';
import {Topping} from './topping.model';
import {Entity, model, property} from '@loopback/repository';

@model()
export class ToppingList extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @hasMany(() => Topping)
  toppings?: Topping[];

  constructor(data?: Partial<ToppingList>) {
    super(data);
  }
}

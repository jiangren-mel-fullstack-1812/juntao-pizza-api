import {Entity, model, property} from '@loopback/repository';

@model()
export class Topping extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  imgUrl: string;

  @property()
  toppingListId: number;

  constructor(data?: Partial<Topping>) {
    super(data);
  }
}

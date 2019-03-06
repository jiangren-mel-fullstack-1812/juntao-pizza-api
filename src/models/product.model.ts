import {Entity, model, property} from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

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
  })
  type?: string;

  @property({
    type: 'string',
  })
  imageUrl?: string;


  constructor(data?: Partial<Product>) {
    super(data);
  }
}

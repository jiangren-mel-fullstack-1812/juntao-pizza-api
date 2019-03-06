import {repository} from '@loopback/repository';
import {ToppingListRepository} from '../repositories';
import {post, param, requestBody} from '@loopback/rest';
import {Topping} from '../models';

export class ToppingListToppingController {
  constructor(
    @repository(ToppingListRepository) protected toppingListRepository: ToppingListRepository,
  ) {}

  @post('/topping-lists/{id}/toppings')
  async create(@param.path.number('id') id: number, @requestBody() topping: Topping) {
    return await this.toppingListRepository.toppings(id).create(topping);
  }
}
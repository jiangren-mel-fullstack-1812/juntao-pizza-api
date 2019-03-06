import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ToppingList} from '../models';
import {ToppingListRepository} from '../repositories';

export class ToppingListController {
  constructor(
    @repository(ToppingListRepository)
    public toppingListRepository : ToppingListRepository,
  ) {}

  @post('/topping-lists', {
    responses: {
      '200': {
        description: 'ToppingList model instance',
        content: {'application/json': {schema: {'x-ts-type': ToppingList}}},
      },
    },
  })
  async create(@requestBody() toppingList: ToppingList): Promise<ToppingList> {
    return await this.toppingListRepository.create(toppingList);
  }

  @get('/topping-lists/count', {
    responses: {
      '200': {
        description: 'ToppingList model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ToppingList)) where?: Where,
  ): Promise<Count> {
    return await this.toppingListRepository.count(where);
  }

  @get('/topping-lists', {
    responses: {
      '200': {
        description: 'Array of ToppingList model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ToppingList}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ToppingList)) filter?: Filter,
  ): Promise<ToppingList[]> {
    return await this.toppingListRepository.find(filter);
  }

  @patch('/topping-lists', {
    responses: {
      '200': {
        description: 'ToppingList PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() toppingList: ToppingList,
    @param.query.object('where', getWhereSchemaFor(ToppingList)) where?: Where,
  ): Promise<Count> {
    return await this.toppingListRepository.updateAll(toppingList, where);
  }

  @get('/topping-lists/{id}', {
    responses: {
      '200': {
        description: 'ToppingList model instance',
        content: {'application/json': {schema: {'x-ts-type': ToppingList}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ToppingList> {
    return await this.toppingListRepository.findById(id);
  }

  @patch('/topping-lists/{id}', {
    responses: {
      '204': {
        description: 'ToppingList PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() toppingList: ToppingList,
  ): Promise<void> {
    await this.toppingListRepository.updateById(id, toppingList);
  }

  @put('/topping-lists/{id}', {
    responses: {
      '204': {
        description: 'ToppingList PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() toppingList: ToppingList,
  ): Promise<void> {
    await this.toppingListRepository.replaceById(id, toppingList);
  }

  @del('/topping-lists/{id}', {
    responses: {
      '204': {
        description: 'ToppingList DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.toppingListRepository.deleteById(id);
  }
}

import { Filter } from '@loopback/repository';
import { Order, OrderCreation } from '../models';
import { OrderRepository, ProductRepository, UserRepository } from '../repositories';
export declare class OrderController {
    orderRepository: OrderRepository;
    productRepository: ProductRepository;
    userRepository: UserRepository;
    constructor(orderRepository: OrderRepository, productRepository: ProductRepository, userRepository: UserRepository);
    create(orderRequest: OrderCreation): Promise<Order>;
    find(filter?: Filter): Promise<Order[]>;
    findById(id: string): Promise<Order>;
    updateById(id: string, order: Order): Promise<void>;
}

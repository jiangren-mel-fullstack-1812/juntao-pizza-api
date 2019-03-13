import { Filter } from '@loopback/repository';
import { User, LoginRequest, LoginResponse, Order } from '../models';
import { UserRepository, OrderRepository } from '../repositories';
export declare class UserController {
    userRepository: UserRepository;
    orderRepository: OrderRepository;
    constructor(userRepository: UserRepository, orderRepository: OrderRepository);
    create(user: User): Promise<User>;
    login(user: LoginRequest): Promise<LoginResponse>;
    find(filter?: Filter): Promise<User[]>;
    findById(name: string): Promise<User>;
    findOrdersById(name: string): Promise<Order[]>;
    deleteById(name: string): Promise<void>;
}

import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id: string;
    name: string;
    password: string;
    email?: string;
    type?: string;
    phone?: string;
    constructor(data?: Partial<User>);
}

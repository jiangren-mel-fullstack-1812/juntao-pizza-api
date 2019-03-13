import { Model } from '@loopback/repository';
export declare class LoginRequest extends Model {
    username: string;
    password: string;
    constructor(data?: Partial<LoginRequest>);
}

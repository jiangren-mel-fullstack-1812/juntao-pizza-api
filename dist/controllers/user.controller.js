"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserController = class UserController {
    constructor(userRepository, orderRepository) {
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
    }
    async create(user) {
        let existingUser = await this.userRepository.findOne({ where: { name: user.name } });
        if (existingUser) {
            throw new rest_1.HttpErrors.BadRequest(`user name: ${user.name} existed`);
        }
        return await this.userRepository.create(user);
    }
    async login(user) {
        return this.userRepository.findOne({ where: { name: user.username, password: user.password } }).then(foundUser => {
            if (!foundUser) {
                throw new rest_1.HttpErrors[401](`login failed`);
            }
            let response = new models_1.LoginResponse();
            response.userId = foundUser.getId();
            return response;
        });
    }
    async find(filter) {
        return await this.userRepository.find(filter);
    }
    async findById(name) {
        let foundUser = await this.userRepository.findOne({ where: { name: name } });
        if (!foundUser) {
            throw new rest_1.HttpErrors.NotFound();
        }
        return foundUser;
    }
    async findOrdersById(name) {
        return await this.orderRepository.find({ where: { userName: name } });
    }
    async deleteById(name) {
        let foundUser = await this.userRepository.findOne({ where: { name: name } });
        if (!foundUser) {
            throw new rest_1.HttpErrors.NotFound(`user name ${name} not exist`);
        }
        await this.userRepository.delete(foundUser);
    }
};
__decorate([
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.User } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    rest_1.post('/users/login', {
        responses: {
            '200': {
                description: 'return user id',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.LoginResponse } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.LoginRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.User } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
__decorate([
    rest_1.get('/users/{name}', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.User } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    rest_1.get('/users/{name}/orders', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': [] } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOrdersById", null);
__decorate([
    rest_1.del('/users/{name}', {
        responses: {
            '204': {
                description: 'User DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
UserController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __param(1, repository_1.repository(repositories_1.OrderRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository,
        repositories_1.OrderRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
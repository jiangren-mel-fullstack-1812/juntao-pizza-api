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
let OrderController = class OrderController {
    constructor(orderRepository, productRepository, userRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }
    async create(orderRequest) {
        // get product by orderitem.productId
        // set product.name to orderItem.productName;
        let newOrder = new models_1.Order();
        let customer = await this.userRepository.findById(orderRequest.userName);
        if (!customer) {
            throw new rest_1.HttpErrors.BadRequest("customer not found");
        }
        newOrder.userName = orderRequest.userName;
        newOrder.orderItems = Object.assign([], orderRequest.orderItems);
        for (let orderItem of newOrder.orderItems) {
            let foundProduct = await this.productRepository.findById(orderItem.productId);
            orderItem.productName = foundProduct.name;
            orderItem.price = foundProduct.price;
        }
        newOrder.status = "ordered";
        return this.orderRepository.create(newOrder);
    }
    async find(filter) {
        console.log(`find by customer id: ${filter}`);
        return await this.orderRepository.find(filter);
    }
    async findById(id) {
        return await this.orderRepository.findById(id);
    }
    async updateById(id, order) {
        await this.orderRepository.updateById(id, order);
    }
};
__decorate([
    rest_1.post('/orders', {
        responses: {
            '200': {
                description: 'Order model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Order } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.OrderCreation]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    rest_1.get('/orders', {
        responses: {
            '200': {
                description: 'Array of Order model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Order } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.string('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "find", null);
__decorate([
    rest_1.get('/orders/{id}', {
        responses: {
            '200': {
                description: 'Order model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Order } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findById", null);
__decorate([
    rest_1.patch('/orders/{id}', {
        responses: {
            '204': {
                description: 'Order PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateById", null);
OrderController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrderRepository)),
    __param(1, repository_1.repository(repositories_1.ProductRepository)),
    __param(2, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.OrderRepository,
        repositories_1.ProductRepository,
        repositories_1.UserRepository])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map
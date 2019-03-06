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
let ToppingController = class ToppingController {
    constructor(toppingRepository) {
        this.toppingRepository = toppingRepository;
    }
    async create(topping) {
        return await this.toppingRepository.create(topping);
    }
    async count(where) {
        return await this.toppingRepository.count(where);
    }
    async find(filter) {
        return await this.toppingRepository.find(filter);
    }
    async updateAll(topping, where) {
        return await this.toppingRepository.updateAll(topping, where);
    }
    async findById(id) {
        return await this.toppingRepository.findById(id);
    }
    async updateById(id, topping) {
        await this.toppingRepository.updateById(id, topping);
    }
    async replaceById(id, topping) {
        await this.toppingRepository.replaceById(id, topping);
    }
    async deleteById(id) {
        await this.toppingRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/toppings', {
        responses: {
            '200': {
                description: 'Topping model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Topping } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Topping]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "create", null);
__decorate([
    rest_1.get('/toppings/count', {
        responses: {
            '200': {
                description: 'Topping model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Topping))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "count", null);
__decorate([
    rest_1.get('/toppings', {
        responses: {
            '200': {
                description: 'Array of Topping model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Topping } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Topping))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "find", null);
__decorate([
    rest_1.patch('/toppings', {
        responses: {
            '200': {
                description: 'Topping PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Topping))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Topping, Object]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/toppings/{id}', {
        responses: {
            '200': {
                description: 'Topping model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Topping } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "findById", null);
__decorate([
    rest_1.patch('/toppings/{id}', {
        responses: {
            '204': {
                description: 'Topping PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Topping]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "updateById", null);
__decorate([
    rest_1.put('/toppings/{id}', {
        responses: {
            '204': {
                description: 'Topping PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Topping]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/toppings/{id}', {
        responses: {
            '204': {
                description: 'Topping DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "deleteById", null);
ToppingController = __decorate([
    __param(0, repository_1.repository(repositories_1.ToppingRepository)),
    __metadata("design:paramtypes", [repositories_1.ToppingRepository])
], ToppingController);
exports.ToppingController = ToppingController;
//# sourceMappingURL=topping.controller.js.map
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
let ToppingListController = class ToppingListController {
    constructor(toppingListRepository) {
        this.toppingListRepository = toppingListRepository;
    }
    async create(toppingList) {
        return await this.toppingListRepository.create(toppingList);
    }
    async count(where) {
        return await this.toppingListRepository.count(where);
    }
    async find(filter) {
        return await this.toppingListRepository.find(filter);
    }
    async updateAll(toppingList, where) {
        return await this.toppingListRepository.updateAll(toppingList, where);
    }
    async findById(id) {
        return await this.toppingListRepository.findById(id);
    }
    async updateById(id, toppingList) {
        await this.toppingListRepository.updateById(id, toppingList);
    }
    async replaceById(id, toppingList) {
        await this.toppingListRepository.replaceById(id, toppingList);
    }
    async deleteById(id) {
        await this.toppingListRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/topping-lists', {
        responses: {
            '200': {
                description: 'ToppingList model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.ToppingList } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.ToppingList]),
    __metadata("design:returntype", Promise)
], ToppingListController.prototype, "create", null);
__decorate([
    rest_1.get('/topping-lists/count', {
        responses: {
            '200': {
                description: 'ToppingList model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ToppingList))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ToppingListController.prototype, "count", null);
__decorate([
    rest_1.get('/topping-lists', {
        responses: {
            '200': {
                description: 'Array of ToppingList model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.ToppingList } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.ToppingList))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ToppingListController.prototype, "find", null);
__decorate([
    rest_1.patch('/topping-lists', {
        responses: {
            '200': {
                description: 'ToppingList PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ToppingList))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.ToppingList, Object]),
    __metadata("design:returntype", Promise)
], ToppingListController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/topping-lists/{id}', {
        responses: {
            '200': {
                description: 'ToppingList model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.ToppingList } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ToppingListController.prototype, "findById", null);
__decorate([
    rest_1.patch('/topping-lists/{id}', {
        responses: {
            '204': {
                description: 'ToppingList PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.ToppingList]),
    __metadata("design:returntype", Promise)
], ToppingListController.prototype, "updateById", null);
__decorate([
    rest_1.put('/topping-lists/{id}', {
        responses: {
            '204': {
                description: 'ToppingList PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.ToppingList]),
    __metadata("design:returntype", Promise)
], ToppingListController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/topping-lists/{id}', {
        responses: {
            '204': {
                description: 'ToppingList DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ToppingListController.prototype, "deleteById", null);
ToppingListController = __decorate([
    __param(0, repository_1.repository(repositories_1.ToppingListRepository)),
    __metadata("design:paramtypes", [repositories_1.ToppingListRepository])
], ToppingListController);
exports.ToppingListController = ToppingListController;
//# sourceMappingURL=topping-list.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const topping_model_1 = require("./topping.model");
const repository_2 = require("@loopback/repository");
let ToppingList = class ToppingList extends repository_2.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_2.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], ToppingList.prototype, "id", void 0);
__decorate([
    repository_1.hasMany(() => topping_model_1.Topping),
    __metadata("design:type", Array)
], ToppingList.prototype, "toppings", void 0);
ToppingList = __decorate([
    repository_2.model(),
    __metadata("design:paramtypes", [Object])
], ToppingList);
exports.ToppingList = ToppingList;
//# sourceMappingURL=topping-list.model.js.map
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
exports.CollectionService = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../product/product.service");
const utility_functions_1 = require("../utility-functions");
const product_model_1 = require("../product/product.model");
let CollectionService = class CollectionService {
    constructor(productService) {
        this.productService = productService;
    }
    async get(name) {
        if (name === 'featured') {
            return await this.getFeatured();
        }
        if (name === 'all products') {
            return await this.getAll();
        }
        return {
            name, products: await this.productService.findByCollection(name)
        };
    }
    async getFeatured() {
        const products = await this.productService.findAll(), numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], shuffled = utility_functions_1.shuffle(numbers), featured = [];
        featured.push(products[shuffled[0]]);
        featured.push(products[shuffled[1]]);
        featured.push(products[shuffled[2]]);
        featured.push(products[shuffled[3]]);
        featured.push(products[shuffled[4]]);
        return {
            products: featured, name: 'featured'
        };
    }
    async getAll() {
        return {
            products: await this.productService.findAll(), name: 'all products'
        };
    }
};
CollectionService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], CollectionService);
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map
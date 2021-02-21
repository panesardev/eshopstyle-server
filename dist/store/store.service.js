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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let StoreService = class StoreService {
    constructor(http) {
        this.http = http;
        this.URL = 'https://fakestoreapi.com/products/';
    }
    async getProducts() {
        return this.http.get(this.URL).pipe(operators_1.map(response => response.data)).toPromise();
    }
    async getProductsOfCategory(category) {
        return this.http.get(`${this.URL}category/${category}`).pipe(operators_1.map(response => response.data)).toPromise();
    }
};
StoreService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], StoreService);
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map
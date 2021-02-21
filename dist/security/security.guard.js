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
exports.SecurityConfig = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const logger_middleware_1 = require("../logger.middleware");
let SecurityConfig = class SecurityConfig {
    constructor(JWT, routes) {
        this.JWT = JWT;
        this.routes = routes;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        logger_middleware_1.logger(request);
        this.resolveJwt(request);
        return true;
    }
    resolveJwt(request) {
        const token = request.headers.authorization.split(' ')[1];
        console.log(token);
    }
    resolveRoute(request) {
        const currentRoute = request.url;
    }
};
SecurityConfig = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService, Array])
], SecurityConfig);
exports.SecurityConfig = SecurityConfig;
//# sourceMappingURL=security.guard.js.map
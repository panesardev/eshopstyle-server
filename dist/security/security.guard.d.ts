import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Route } from './route.model';
declare type SecurityResponse = boolean | Promise<boolean> | Observable<boolean>;
export declare class SecurityConfig implements CanActivate {
    private JWT;
    private routes;
    constructor(JWT: JwtService, routes: Route[]);
    canActivate(context: ExecutionContext): SecurityResponse;
    resolveJwt(request: Request): void;
    resolveRoute(request: Request): void;
}
export {};

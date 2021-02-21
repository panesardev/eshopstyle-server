import { Logger } from '@nestjs/common';
import { timeStamp } from './utility-functions';
import { Request, Response, NextFunction } from 'express';

export function logger(request: Request, response: Response, next: NextFunction) {
  Logger.log(`[${timeStamp()}] ${request.method} ${request.url}`);
  next();
};

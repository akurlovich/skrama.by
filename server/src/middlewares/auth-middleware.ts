import {  NextFunction, Request, Response } from "express";
import ApiError from "../exceptions/api-error";
import tokenService from "../service/token-service";

export default function(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return next(ApiError.UnauthorizedError());
    const accesstoken = authHeader.split(' ')[1];
    if (!accesstoken) return next(ApiError.UnauthorizedError());
    const userData = tokenService.validateAccessToken(accesstoken);
    if (!userData) return next(ApiError.UnauthorizedError());
    req.body = userData;
    next();
  } catch (error) {
    return next(ApiError.UnauthorizedError())
  }
}
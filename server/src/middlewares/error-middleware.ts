import { NextFunction, Request, Response } from "express";
import ApiError from "../exceptions/api-error";

export default function(err: ApiError, req: Request, res: Response, next: NextFunction) {
  return res.status(err.status).json({message: err.message})
}
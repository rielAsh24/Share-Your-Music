import type { Request, Response, NextFunction } from "express";

export function isAuthenticated(
  req: Request,
  __: Response,
  next: NextFunction
) {
  if (req.session) next();
  else next("route");
}

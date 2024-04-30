import type { Request, Response, NextFunction } from "express";

export async function verifySession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { session, sessionStore } = req;
  sessionStore.get(session.id, (err, session) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }

    if (!session) next();
    else res.status(204).json({ message: "Session Found" });
  });
}

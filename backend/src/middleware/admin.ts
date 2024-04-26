import type { Request, Response, NextFunction } from "express";

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
  const { session, sessionStore } = req;
  sessionStore.get(session.id, (err, session) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }

    if (!session) res.status(401).json({ message: "Unauthorized" });
    else {
      if (session.admin) next();
      else res.status(401).json({ message: "Unauthorized" });
    }
  });
}

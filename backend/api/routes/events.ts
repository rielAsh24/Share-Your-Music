import "dotenv/config";

import { Router } from "express";
import type { Request, Response } from "express";

import { Activities } from "../models/Events";
import { isAuthenticated } from "../middleware/auth";

const router = Router();
router.use(isAuthenticated);

// GET ALL ACTIVITIES
router.get("/", (__: Request, res: Response) => {
  Activities.find({})
    .select({ __v: 0 })
    .then((acts) => {
      res.status(200).json(acts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// GET ONE ACTIVITY
router.get("/:eid", (req: Request, res: Response) => {
  Activities.findOne({ _id: req.params.eid })
    .select({ __v: 0 })
    .then((acts) => {
      if (acts) res.status(200).json(acts);
      else res.status(404).json({ error: "Not Found" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

export default router;

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
    .select({ _id: 0, __v: 0 })
    .then((acts) => {
      res.status(200).json(acts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// GET ONE ACTIVITY
router.get("/:name", (req: Request, res: Response) => {
  Activities.findOne({ name: req.params.name })
    .select({ _id: 0, __v: 0 })
    .then((acts) => {
      res.status(200).json(acts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

export default router;

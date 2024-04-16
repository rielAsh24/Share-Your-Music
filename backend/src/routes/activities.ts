import "dotenv/config";
import { Router } from "express";
import type { Request, Response } from "express";
import Activities from "../models/Activities";

const router = Router();

// GET ALL ACTIVITIES
router.get("/activities", (_: Request, res: Response) => {
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

// GET ONE ACTIVITy
router.get("/activities/:name", (req: Request, res: Response) => {
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

import "dotenv/config";

import bcrypt from "bcrypt";
import { Router } from "express";
import type { Request, Response } from "express";

import { Members } from "../models/Members";
import { isAdmin } from "../middleware/admin";

const router = Router();
router.use(isAdmin);

// GET ALL MEMBERS
router.get("/", (__: Request, res: Response) => {
  Members.find({})
    .select({ password: 0, __v: 0 })
    .then((members) => {
      res.status(200).json(members);
    })
    .catch((err) => {
      res.status(400).json({ error: true, message: err.message });
    });
});

// FIND A MEMBER
router.get("/:email", (req: Request, res: Response) => {
  const email: string = req.params.email;

  Members.findOne({ _id: email })
    .select({ password: 0, __v: 0 })
    .then((user_info) => {
      if (user_info === null)
        res.status(404).json({ error: true, message: "User Not Found" });
      else res.status(200).json(user_info);
    })
    .catch((err) => {
      res.status(500).json({ error: true, message: err.message });
    });
});

// MANUALLY ADD MEMBERS
router.post("/", (req: Request, res: Response) => {
  const { name, email } = req.body;
  // Generate Default Password
  const password = bcrypt.hashSync("thisshouldbechanged", 13);

  Members.create({
    name: name,
    _id: email,
    password: password
  })
    .then(() => {
      res.status(201).json({ message: "Member Added Successful" });
    })
    .catch((err) => {
      res.status(400).json({ error: true, message: err.message });
    });
});

// MANUALLY DELETE MEMBERS
router.delete("/:email", async (req: Request, res: Response) => {
  const email: string = req.params.email;

  Members.deleteOne({ _id: email })
    .then((result) => {
      if (result.deletedCount === 1) {
        res.sendStatus(204);
      } else res.status(404).json({ error: true, message: "User Not Found" });
    })
    .catch((err) => {
      res.status(500).json({ error: true, message: err.message });
    });
});

export default router;

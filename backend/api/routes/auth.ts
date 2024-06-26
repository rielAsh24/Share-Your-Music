import "dotenv/config";

import bcrypt from "bcrypt";
import { Router } from "express";
import type { Request, Response } from "express";

import { Members } from "../models/Members";
import { isAuthenticated } from "../middleware/auth";
import { verifySession } from "../middleware/verify";

const router = Router();

// APPLY FOR MEMBERSHIP
router.post("/apply", (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  // Encryption
  const newpassword = bcrypt.hashSync(password, 13);

  Members.create({
    name: name,
    _id: email,
    password: newpassword,
    role: "member"
  })
    .then(() => {
      res.status(201).json({ message: "Member Application Successful" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

// LOGIN
router.post("/login", verifySession, (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Find if email exists
  Members.findOne({ _id: email })
    .select({ name: 0, __v: 0 })
    .then((user_info) => {
      if (user_info === null) {
        res.status(404).json({ error: true, message: "User Not Found" });
      } else {
        // Encrypt pass
        const verified = bcrypt.compareSync(password, user_info.password);
        if (verified) {
          // Regenerate session
          req.session.regenerate((err) => {
            if (err) {
              console.log(err);
              res
                .status(500)
                .json({ error: true, message: "Internal Server error" });
            } else if (req.session) {
              // Setup session profile
              req.session.profile = {
                email: user_info.id,
                role: user_info.role
              };
              req.session.save((err) => {
                if (err) {
                  console.log(err);
                  res
                    .status(500)
                    .json({ error: true, message: "Internal Server error" });
                }
                res.status(202).json({ sess: true, message: "Login Success" });
              });
            } else
              res
                .status(401)
                .json({ error: true, message: "User/Password error" });
          });
        }
      }
    });
});

// GET USER PROFILE
router.get("/profile", isAuthenticated, (req: Request, res: Response) => {
  const email: string = req.session.profile!.email;
  Members.findOne({ _id: email })
    .select({ name: 1, _id: 1 })
    .then((profile) => {
      if (profile)
        res.status(200).json({
          name: profile.name,
          email: profile.id
        });
      else res.status(404).json({ error: true, message: "Not Found" });
    })
    .catch((err) => {
      res.status(400).json({ error: true, message: err.message });
    });
});

// VERIFY SESSIONS
router.get("/verify", (req: Request, res: Response) => {
  const { session, sessionStore } = req;
  sessionStore.get(session.id, (err, session) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }

    if (!session) res.status(404).send("Session Not Found");
    else res.status(204).send("Session Found");
  });
});

// LOGOUT
router.get("/logout", isAuthenticated, (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: true, message: "Internal Server error" });
    }
    res.sendStatus(204);
  });
});

export default router;

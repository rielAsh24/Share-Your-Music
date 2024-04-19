import "dotenv/config";
import bcrypt from "bcrypt";
import session from "express-session";
import { Router } from "express";

import type { Request, Response } from "express";
import { Members } from "../models/Members";

const router = Router();

// SESSION SETUP
router.use(
  session({
    secret: process.env.SESS_SEC!,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    name: process.env.COOKIE_NAME!
  })
);

// APPLY AS MEMBER
router.post("/apply", (req: Request, res: Response) => {
  let { name, email, password } = req.body;
  // Encryption
  const newpassword = bcrypt.hashSync(password, 13);

  Members.create({
    name: name,
    email: email,
    password: newpassword
  })
    .then(() => {
      res.status(201).json({ message: "Member Application Successful" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

// LOGIN AS MEMBER
router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  Members.findOne({ email: email }).then((user_info) => {
    if (user_info === null) {
      res.status(401).json({ error: true, message: "User Not Found" });
      return;
    } else {
      const verified = bcrypt.compareSync(password, user_info.password);
      if (verified) {
        req.session.regenerate((err) => {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ error: true, message: "Internal Server error" });
          } else if (req.session)
            // res.status(202).json({ sess: true, message: "Login Success" });
            res.status(202).json({ sess: true, message: "Login Success" });
        });
      } else
        res.status(401).json({ error: true, message: "User/Password error" });
    }
  });
});

// LOGOUT AS MEMBER
router.get("/logout", (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: true, message: "Internal Server error" });
    }
    // res.clearCookie(process.env.COOKIE_NAME!);
    res.sendStatus(204);
  });
});

export default router;

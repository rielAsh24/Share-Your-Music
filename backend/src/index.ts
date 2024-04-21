import "dotenv/config";

import express from "express";
import session from "express-session";

import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import apiRouter from "./routes/api";
import authRouter from "./routes/auth";
import ad_memRouter from "./routes/ad-mems";

// SERVER DEFINITIONS
const PORT: number = Number(process.env.SERVE_PORT);
const app = express();

// SESSION SETUP
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL!,
      autoRemove: "interval",
      autoRemoveInterval: 30
    }),
    name: process.env.COOKIE_NAME!,
    cookie: { secure: false },
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SEC!
  })
);

app.use(express.json({ limit: 300 }));

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
}

app.use("/api", apiRouter);
app.use("/auth", authRouter);
app.use("/members", ad_memRouter);

// DATABASE CONNECTION
mongoose.connect(process.env.DB_URL!).then(() => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

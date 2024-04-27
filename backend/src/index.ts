import "dotenv/config";

import express from "express";
import session from "express-session";

import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import {onRequest} from "firebase-functions/v2/https";

import eventsRouter from "./routes/events";
import authRouter from "./routes/auth";
import ad_memRouter from "./routes/ad-mems";

// SERVER DEFINITIONS
const app = express();

// DATABASE CONNECTION
mongoose.connect(process.env.DB_URL!).then(() => {
  console.log("Connected to MongoDB");
});

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

app.use("/events", eventsRouter);
app.use("/auth", authRouter);
app.use("/members", ad_memRouter);

export const api = onRequest(app);
import "dotenv/config";

import express from "express";
import session from "express-session";

import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import eventsRouter from "./routes/events";
import authRouter from "./routes/auth";
import ad_memRouter from "./routes/ad-mems";

// SERVER DEFINITIONS
const app = express();

app.use(express.json({ limit: 300 }));

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log("Connected to DB");
});

// SESSION SETUP
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI!,
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

// if (app.get("env") === "production") {
//   app.set("trust proxy", 1); // trust first proxy
// }

app.use("/events", eventsRouter);
app.use("/auth", authRouter);
app.use("/members", ad_memRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});

export default app;

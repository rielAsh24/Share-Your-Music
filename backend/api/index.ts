import "dotenv/config";

import express from "express";
import session from "express-session";

import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import eventsRouter from "./routes/events";
import authRouter from "./routes/auth";
import ad_memRouter from "./routes/ad-mems";
import { addTestMember, addTestEvents } from "./initTestData";
import { Members } from "./models/Members";

// SERVER DEFINITIONS
const app = express();

app.use(express.json({ limit: 300 }));

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

app.use("/events", eventsRouter);
app.use("/auth", authRouter);
app.use("/members", ad_memRouter);

async function initializeApp() {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to DB");

    const adminExists: object | null = await Members.exists({
      _id: process.env.ADMIN_EMAIL!
    });

    if (adminExists === null) {
      await addTestMember();
      await addTestEvents();
    }

    // Start server
    app.listen(process.env.PORT, () => {
      console.log(`Server started at ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to initialize app:", error);
    process.exit(1);
  }
}

initializeApp();

export default app;

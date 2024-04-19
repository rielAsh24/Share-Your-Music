import "dotenv/config";

import express from "express";
import mongoose from "mongoose";

import apiRouter from "./routes/activities";
import authRouter from "./routes/members";

// SERVER DEFINITIONS
const PORT: number = Number(process.env.SERVE_PORT);
const app = express();

app.use(express.json({ limit: 300 }));

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  // sess.cookie.secure = true; // serve secure cookies
}

app.use("/api", apiRouter);
app.use("/auth", authRouter);

// DATABASE CONNECTION
mongoose.connect(process.env.DB_URL!).then(() => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

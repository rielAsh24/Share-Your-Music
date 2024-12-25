import "dotenv/config";

import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { Activities, type Activity } from "../api/models/Events";
import { Members } from "../api/models/Members";
import eventsList from "./test_data/eventData.json";

/**
 * TODO: Re-work init and Server + DB interaction
 */

async function addTestMember() {
  const testMember = {
    name: "test",
    _id: "test@email.com",
    password: bcrypt.hashSync("somebody#1usetoknow", 13),
    role: "member"
  };

  const adminMember = {
    name: "ADMIN",
    _id: process.env.ADMIN_EMAIL!,
    password: bcrypt.hashSync(process.env.ADMIN_PASS!, 13),
    role: "admin"
  };

  await Members.insertMany([testMember, adminMember])
    .then(() => console.log("Test Members Added"))
    .catch((err: Error) => console.error(err));
}

async function addTestEvents() {
  const eventsTest: Activity[] = eventsList.map((e, i) => {
    return {
      _id: `${e.name.substring(0, 2).toUpperCase()}${i}`,
      name: e.name,
      date: new Date(e.date).toISOString()
    };
  });

  await Activities.insertMany(eventsTest)
    .then(() => console.log("Test Events Added"))
    .catch((err: Error) => console.error(err));
}

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    Promise.all([addTestMember(), addTestEvents()]).then(() => {
      mongoose.connection.close();
    });
  })
  .catch((err: Error) => console.error(err));

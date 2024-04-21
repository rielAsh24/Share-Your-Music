import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { Activities } from "../src/models/Events";
import { Members } from "../src/models/Members";
import eventsList from "./test_data/eventData.json";

/**
 * TODO: Re-work init and Server + DB interaction
 */

async function addTestMember() {
  const testMember = {
    name: "test",
    email: "test@email.com",
    password: bcrypt.hashSync("somebody#1usetoknow", 13),
    role: "member"
  };

  const adminMember = {
    name: "ADMIN",
    email: process.env.ADMIN_EMAIL!,
    password: bcrypt.hashSync(process.env.ADMIN_PASS!, 13),
    role: "admin"
  };

  await Members.insertMany([testMember, adminMember])
    .then(() => console.log("Test Members Added"))
    .catch((err: Error) => console.error(err));
}

async function addTestEvents() {
  const eventsTest = eventsList.map((events) => {
    return {
      name: events.name,
      date: new Date(events.date).toDateString()
    };
  });

  await Activities.insertMany(eventsTest)
    .then(() => console.log("Test Events Added"))
    .catch((err: Error) => console.error(err));
}

mongoose
  .connect(process.env.DB_URL!)
  .then(() => {
    Promise.all([addTestMember(), addTestEvents()]).then(() => {
      mongoose.connection.close();
    });
  })
  .catch((err: Error) => console.error(err));

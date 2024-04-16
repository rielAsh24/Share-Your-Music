import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import Activities from "../src/models/Activities";
import Members from "../src/models/Members";
import eventsList from "./test_data/eventData.json";

/**
 * TODO: Re-work init and Server + DB interaction
 */
async function addTestMember() {
  const testMember = {
    name: "test",
    email: "test@email.com",
    password: bcrypt.hashSync("somebody#1usetoknow", 13)
  };

  await Members.create(testMember)
    .then(() => console.log("Test Member Added"))
    .catch((err) => console.error(err));
}

async function addTestEvents() {
  const eventsTest = eventsList.map((events) => {
    return {
      name: events.name,
      date: new Date(events.date).toISOString()
    };
  });

  await Activities.insertMany(eventsTest)
    .then(() => console.log("Test Events Added"))
    .catch((err) => console.error(err));
}

mongoose
  .connect(process.env.DB_URL!)
  .then(() => {
    Promise.all([addTestMember(), addTestEvents()]).then(() => {
      mongoose.connection.close();
    });
  })
  .catch((err) => console.error(err));

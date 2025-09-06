import "dotenv/config";
import bcrypt from "bcrypt";

import { Activities, type Activity } from "./models/Events";
import { Members } from "./models/Members";
import eventsList from "../tests/test_data/eventData.json";

export async function addTestMember() {
  const testMember = {
    name: "test",
    _id: process.env.TEST_EMAIL!,
    password: bcrypt.hashSync(process.env.TEST_PASS!, 13),
    role: "member"
  };

  const adminMember = {
    name: "ADMIN",
    _id: process.env.ADMIN_EMAIL!,
    password: bcrypt.hashSync(process.env.ADMIN_PASS!, 13),
    role: "admin"
  };

  try {
    await Members.insertMany([testMember, adminMember]);
    console.log("Test Members Added");
  } catch (error) {
    console.error(error);
  }
}

export async function addTestEvents() {
  const eventsTest: Activity[] = eventsList.map((e, i) => {
    return {
      _id: `${e.name.substring(0, 2).toUpperCase()}${i}`,
      name: e.name,
      date: new Date(e.date).toISOString()
    };
  });

  try {
    await Activities.insertMany(eventsTest);
    console.log("Test Events Added");
  } catch (error) {
    console.error(error);
  }
}

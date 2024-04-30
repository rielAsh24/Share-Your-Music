import "dotenv/config";

import { beforeAll, describe, expect, test } from "@jest/globals";
import type { Activity } from "../api/models/Events";
import eventsList from "./test_data/eventData.json";

const api = `${process.env.API_URL}/events`;

let cookie: string;

const eventsTest: Activity[] = eventsList.map((e, i) => {
  return {
    _id: `${e.name.substring(0, 2).toUpperCase()}${i}`,
    name: e.name,
    date: new Date(e.date).toISOString()
  };
});

beforeAll(async () => {
  const response = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "test@email.com",
      password: "somebody#1usetoknow"
    })
  });

  cookie = response.headers.getSetCookie()[0];
});

describe("1. Get All Events", () => {
  test("should return all activities", async () => {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        cookie: cookie
      }
    });

    const res = await response.json();
    expect(response.ok).toBeTruthy();
    expect(response.status).toEqual(200);
    expect(res).toEqual(eventsTest);
  });
});

describe("2. Get One Event", () => {
  test("should return 1st Event", async () => {
    const response = await fetch(`${api}/${eventsTest[0]._id}`, {
      method: "GET",
      headers: {
        cookie: cookie
      }
    });

    const res = await response.json();
    expect(response.ok).toBeTruthy();
    expect(response.status).toEqual(200);
    expect(res).toEqual(eventsTest[0]);
  });
});

/**
 * TODO: Write Event Addition and Deletion Tests
 */

describe("3. Post An Event", () => {
  test.todo("Write test for checking event addition");
});

describe("4. Delete An Event", () => {
  test.todo("Write test for checking event deletion");
});

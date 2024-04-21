import "dotenv/config";
import { beforeAll, describe, expect, test } from "@jest/globals";
import type { Activity } from "../src/models/Events";

import eventsList from "./test_data/eventData.json";

const api = `${process.env.API_URL}/api/activities`;

const eventsTest: Activity[] = eventsList.map((e) => {
  return {
    name: e.name,
    date: new Date(e.date).toISOString()
  };
});

let cookie: string;

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

/**
 * TODO: Re-write all tests
 */

describe("1. Get All Events", () => {
  // test.todo("Get all activities as a Guest");
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
  // test.todo("Get all activities as a Guest");
  test("should return 1st Event", async () => {
    const response = await fetch(
      `${api}/${encodeURIComponent("Ice Breaker Session")}`,
      {
        method: "GET",
        headers: {
          cookie: cookie
        }
      }
    );

    const res = await response.json();
    expect(response.ok).toBeTruthy();
    expect(response.status).toEqual(200);
    expect(res).toEqual(eventsTest[0]);
  });
});

describe("3. Post An Event", () => {
  test.todo("Write test for checking event addition");
  // test("should return 201: 'Event Added' acknowlegdement", () => {
  //   return fetch(`${process.env.API_URL}/api/activities`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: "test Event",
  //       date: Date.now()
  //     }),
  //     headers: { "Content-Type": "application/json" }
  //   }).then((res: Response) => expect(res.status).toBe(201));
  // });
});

describe("4. Delete An Event", () => {
  test.todo("Write test for checking event deletion");
  // test("should return 'Event Deleted' acknowlegdement", () => {
  //   return fetch(process.env.API_URL + "/activities?dI=test", {
  //     method: "DELETE"
  //   }).then((res: Response) => expect(res.status).toBe(410));
  // });
});

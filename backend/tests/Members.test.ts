import "dotenv/config";
import { beforeAll, describe, expect, test } from "@jest/globals";
import type { Member } from "../src/models/Members";

const api = `${process.env.API_URL}/members`;

const testMember: Member = {
  name: "test",
  email: "test3@email.com",
  password: "test"
};

let cookie: string;

beforeAll(async () => {
  const response = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: process.env.ADMIN_EMAIL!,
      password: process.env.ADMIN_PASS!
    })
  });

  cookie = response.headers.getSetCookie()[0];
});

describe("1. Post An member", () => {
  test("should return 201 (member Added)", async () => {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: cookie
      },
      body: JSON.stringify(testMember)
    });
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(201);
  });
});

describe("2. Get all members", () => {
  test("should return all members", async () => {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        cookie: cookie
      }
    });
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(200);
  });
});

describe("3. Get One member", () => {
  test("should return a member", async () => {
    const response = await fetch(`${api}/${testMember.email}`, {
      method: "GET",
      headers: {
        cookie: cookie
      }
    });
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(200);
  });
});

describe("4. Delete An member", () => {
  test("should return 'member Added' message", async () => {
    const response = await fetch(`${api}/${testMember.email}`, {
      method: "DELETE",
      headers: {
        cookie: cookie
      }
    });
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(204);
  });
});

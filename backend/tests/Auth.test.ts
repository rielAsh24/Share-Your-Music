import "dotenv/config";

import { describe, expect, test } from "@jest/globals";
import type { Member } from "../api/models/Members";

const api = `${process.env.API_URL}/auth`;

let cookie: string;

const testMember: Member = {
  name: "test2",
  email: "test2@email.com",
  password: "somebody#2usetoknow"
};

describe("1. Apply for membership", () => {
  test("should return 201 (Account Created)", async () => {
    const response = await fetch(`${api}/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(testMember)
    });

    const res = await response.json();
    expect(response.ok).toBeTruthy();
    expect(response.status).toEqual(201);
    expect(res.message).toEqual("Member Application Successful");
  });
});

describe("2. Login as a member", () => {
  test("should return 202 (Login Sucessful)", async () => {
    const response = await fetch(`${api}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: testMember.email,
        password: testMember.password
      })
    });
    cookie = response.headers.getSetCookie()[0];

    const res = await response.json();
    expect(response.ok).toBeTruthy();
    expect(response.status).toEqual(202);
    expect(res.message).toEqual("Login Success");
  });
});

describe("3. Get Profile Info", () => {
  test("should return 200", async () => {
    const response = await fetch(`${api}/profile`, {
      method: "GET",
      headers: {
        cookie: cookie
      }
    });

    const res = await response.json();
    expect(response.ok).toBeTruthy();
    expect(response.status).toEqual(200);
    expect(res).toEqual({
      name: testMember.name,
      email: testMember.email
    });
  });
});

describe("4. Logout as a member", () => {
  test("should return 204", async () => {
    const response = await fetch(`${api}/logout`, {
      method: "GET",
      headers: {
        cookie: cookie
      }
    });
    expect(response.ok).toBeTruthy();
    expect(response.status).toEqual(204);
  });
});

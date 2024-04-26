import "dotenv/config";
import { describe, expect, test } from "@jest/globals";

/**
 * TODO: Re-write all tests
 */

const api = `${process.env.API_URL}/auth/`;

let cookie: string;

describe("1. Apply for membership", () => {
  test("should return 201 (Account Created)", async () => {
    const response = await fetch(`${api}/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "test2",
        email: "test2@email.com",
        password: "somebody#2usetoknow"
      })
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
        email: "test@email.com",
        password: "somebody#1usetoknow"
      })
    });
    cookie = response.headers.getSetCookie()[0];

    const res = await response.json();
    expect(response.ok).toBeTruthy();
    expect(response.status).toEqual(202);
    expect(res.message).toEqual("Login Success");
  });
});

describe("3. Logout as a member", () => {
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

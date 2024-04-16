import "dotenv/config";
import { describe, expect, test } from "@jest/globals";

/**
 * TODO: Re-write all tests
 */
describe("1. Apply for membership", () => {
  test("should return 201 (Account Created)", async () => {
    const res = await fetch(`${process.env.API_URL}/auth/apply`, {
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
    expect(res.status).toEqual(201);
    // .then((res: Response) => res.json())
    // .then((data) => {
    //   expect(data.message).toEqual("Member Application Successful");
    // });
  });
});

describe("2. Login as a member", () => {
  test("should return 202 (Login Sucessful)", async () => {
    const res = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "test@email.com",
        password: "somebody#1usetoknow"
      })
    });
    expect(res.status).toEqual(202);
    // .then((res: Response) => res.json())
    // .then((data) => {
    //   expect(data.message).toEqual("Login");
    // });
  });
});

describe("3. Logout as a member", () => {
  test("should return 200 (Login Sucessful)", async () => {
    const res = await fetch(`${process.env.API_URL}/auth/logout`, {
      method: "GET"
    });
    expect(res.status).toEqual(200);
  });
});

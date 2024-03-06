"use server";

import { ApplyData, LoginData } from "@/typings/customtypes";
import { cookies } from "next/headers";

async function apply(data: ApplyData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/apply`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );
  // console.log(response.json());

  return response.status;
}

async function login(data: LoginData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );

  if (response.status === 202)
    cookies().set(
      process.env.NEXT_PUBLIC_COOKIE_NAME!,
      response.headers.getSetCookie()[0],
      {
        httpOnly: true,
        maxAge: 60 * 30
      }
    );
  // console.log(response.json());
  return response.status;
}

async function logout() {
  cookies().delete(process.env.NEXT_PUBLIC_COOKIE_NAME!);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
    {
      method: "GET"
    }
  );

  // console.log(response.json());

  return response.status;
}

// const isAuth = () => cookies().has("session");
function isAuth() {
  const authenticated: boolean = cookies().has(
    process.env.NEXT_PUBLIC_COOKIE_NAME!
  );
  // console.log(authenticated);
  if (authenticated) return true;
  return false;
}

export { apply, login, logout, isAuth };

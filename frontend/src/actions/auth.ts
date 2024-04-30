"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

async function apply(data: FormData) {
  const response = await fetch(`${process.env.SERVER_HOME}/auth/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    }),
  });

  if (response.ok) {
    const res = await response.json();
    return res.message;
  } else throw Error("Something went wrong :(");
}

async function login(data: FormData) {
  const response = await fetch(`${process.env.SERVER_HOME}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.get("email"),
      password: data.get("password"),
    }),
  });

  if (response.ok) {
    const res = await response.json();
    if (res.sess)
      cookies().set(
        process.env.COOKIE_NAME!,
        response.headers.getSetCookie()[0],
        {
          httpOnly: true,
          maxAge: 60 * 30,
        },
      );
  } else throw Error("Something went wrong :(");
  redirect("/", RedirectType.replace);
}

async function logout() {
  const header_cookie = cookies().get(process.env.COOKIE_NAME!);

  const response: Response = await fetch(
    `${process.env.SERVER_HOME}/auth/logout`,
    {
      method: "GET",
      headers: {
        cookie: `${header_cookie!.value}`,
      },
    },
  );

  if (response.ok) {
    cookies().delete(process.env.COOKIE_NAME!);
    redirect("/", RedirectType.replace);
  } else throw "Something went wrong :(";
}

async function isAuth() {
  const authenticated: boolean = cookies().has(process.env.COOKIE_NAME!);
  if (authenticated) return true;
  return false;
}

export { apply, login, logout, isAuth };

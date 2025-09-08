"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

async function apply(data: FormData) {
  const response = await fetch(`${process.env.SERVER_HOME}/auth/register`, {
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
    if (res.token) cookies().set("access_token", res.token);
    if (res.refreshToken) cookies().set("refresh_token", res.refreshToken);
    if (res.user) cookies().set("user", JSON.stringify(res.user));
  } else throw Error("Something went wrong :(");
  redirect("/members", RedirectType.replace);
}

async function logout() {
  if (cookies().has("access_token")) {
    cookies().delete("access_token");
    cookies().delete("refresh_token");
    cookies().delete("user");
    redirect("/", RedirectType.replace);
  } else throw "Something went wrong :(";
}

async function isAuth() {
  const authenticated: boolean = cookies().has("access_token");
  if (authenticated) return true;
  return false;
}

export { apply, login, logout, isAuth };

"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { LoginData } from "@/lib/schemas";

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

  return response.json();
}

async function login(data: LoginData) {
  const response = await fetch(`${process.env.SERVER_HOME}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  if (response.ok) {
    try {
      const res = await response.json();
      if (res.token) cookies().set("access_token", res.token);
      if (res.refreshToken) cookies().set("refresh_token", res.refreshToken);
      if (res.user) cookies().set("user", JSON.stringify(res.user));
      return res;
    } catch (error: any) {
      throw new Error(`Something went wrong :( ${error.message}`);
    }
  }
}

async function logout() {
  if (cookies().has("access_token")) {
    cookies().delete("access_token");
    cookies().delete("refresh_token");
    cookies().delete("user");
    redirect("/", RedirectType.replace);
  } else throw "Something went wrong :(";
}

async function refresh() {
  const response = await fetch(`${process.env.SERVER_HOME}/auth/refresh`, {
    headers: {
      "Content-Type": "application/json",
      "refresh-token": cookies().get("refresh-token"),
    },
  });

  if (response.ok) {
    try {
      const res = await response.json();
      if (res.token) cookies().set("access_token", res.token);
      if (res.refreshToken) cookies().set("refresh_token", res.refreshToken);
      if (res.user) cookies().set("user", JSON.stringify(res.user));
      return true;
    } catch (error: any) {
      console.error(`Something went wrong :( ${error.message}`);
      return false;
    }
  }
}

async function isAuth() {
  const authenticated: boolean = cookies().has("access_token");
  if (authenticated) return true;
  else if (cookies().has("refresh_token")) {
    const success = await refresh();
    if (success) return true;
  }
  return false;
}

export { apply, login, logout, isAuth };

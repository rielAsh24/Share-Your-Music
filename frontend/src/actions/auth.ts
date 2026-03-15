"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { ApplyData, LoginData } from "@/lib/schemas";

async function apply(data: ApplyData) {
  const response = await fetch(`${process.env.SERVER_HOME}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    }),
  });

  if (response.ok) {
    try {
      return response.json();
    } catch (error: any) {
      throw new Error(`Error while registering: ${error.message}`);
    }
  }
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
  const customHeaders = new Headers({ "Content-Type": "application/json" });
  customHeaders.set(
    "refresh-token",
    cookies().get("refresh-token")!.toString(),
  );

  const response = await fetch(`${process.env.SERVER_HOME}/auth/refresh`, {
    headers: customHeaders,
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

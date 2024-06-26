"use server";

import { cookies } from "next/headers";

export async function getProfile() {
  const header_cookie = cookies().get(process.env.COOKIE_NAME!);

  const response = await fetch(`${process.env.SERVER_HOME}/auth/profile`, {
    method: "GET",
    headers: {
      cookie: `${header_cookie!.value}`,
    },
  });

  if (response.ok) {
    const res = await response.json();
    return res;
  } else throw Error("Something went wrong :(");
}

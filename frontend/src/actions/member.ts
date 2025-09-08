"use server";

import { cookies } from "next/headers";

export async function getProfile() {
  const access_token = cookies().get("access_token");
  const user = JSON.parse(cookies().get("user")!.value);

  const response = await fetch(`${process.env.SERVER_HOME}/member/${user.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token!.value}`,
    },
  });

  if (response.ok) {
    const res = await response.json();
    return res;
  } else throw Error("Something went wrong :(");
}

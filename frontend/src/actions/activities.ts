"use server";

import { cookies } from "next/headers";

async function allEvents() {
  const access_token = cookies().get("access_token");

  const response = await fetch(`${process.env.SERVER_HOME}/activity`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token!.value}`,
    },
  });

  if (response.status === 200) return await response.json();
}

export { allEvents };

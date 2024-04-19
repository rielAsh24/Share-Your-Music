"use server";

import { cookies } from "next/headers";

async function allEvents() {
  const header_cookie = cookies().get(process.env.COOKIE_NAME!);

  const response = await fetch(`${process.env.SERVER_HOME}/api/activities`, {
    method: "GET",
    headers: {
      cookie: `${header_cookie!.value}`,
    },
  });

  if (response.status === 200) return await response.json();
  else if (response.status === 500) return response.status;
}

export { allEvents };

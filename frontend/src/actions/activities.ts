"use server";

async function allEvents() {
  const response = await fetch(`${process.env.SERVER_HOME}/api/activities`, {
    method: "GET",
  });
  if (response.status === 200) return await response.json();
  else if (response.status === 500) return response.status;
}

export { allEvents };

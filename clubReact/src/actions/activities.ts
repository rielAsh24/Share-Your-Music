"use server";

async function fetchAllActivities() {
  const response = await fetch(`${process.env.API_URL}/api/activities`, {
    method: "GET",
  });
  if (response.status === 200) return response.json();
  else if (response.status === 500) return response.status;
}

export { fetchAllActivities };

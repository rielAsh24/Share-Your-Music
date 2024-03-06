"use client";

import { logout } from "@/libs/server-actions";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function LogoutLink() {
  const router = useRouter();

  function onLogout() {
    logout()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    router.push("/");
  }

  return (
    <Button variant="ghost" onClick={onLogout}>
      Logout
    </Button>
  );
}

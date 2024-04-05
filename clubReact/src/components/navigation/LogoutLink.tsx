"use client";

import { logout } from "@/actions/auth";
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
    <Button className="text-base" variant="link" onClick={onLogout}>
      Logout
    </Button>
  );
}

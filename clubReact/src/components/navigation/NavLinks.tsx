import Link from "next/link";
import { Button } from "../ui/button";

function GuestLinks() {
  return (
    <>
      <Button variant="ghost">
        <Link href="/apply">Sign Up</Link>
      </Button>
      <Button variant="ghost">
        <Link href="/login">Login</Link>
      </Button>
    </>
  );
}

function MemberLinks() {
  return (
    <Button variant="ghost">
      <Link href="/profile">Profile</Link>
    </Button>
  );
}

export { GuestLinks, MemberLinks };

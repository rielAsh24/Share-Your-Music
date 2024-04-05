import Link from "next/link";
import { Button } from "../ui/button";

function GuestLinks() {
  return (
    <>
      <Button className="text-base" variant="link" asChild>
        <Link href="/apply">Sign Up</Link>
      </Button>
      <Button className="text-base" variant="link" asChild>
        <Link href="/login">Login</Link>
      </Button>
    </>
  );
}

function MemberLinks() {
  return (
    <Button className="text-base" variant="link" asChild>
      <Link href="/profile">Profile</Link>
    </Button>
  );
}

export { GuestLinks, MemberLinks };

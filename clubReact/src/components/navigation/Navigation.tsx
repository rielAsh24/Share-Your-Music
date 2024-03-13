import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { isAuth } from "@/actions/auth";
import { GuestLinks, MemberLinks } from "./NavLinks";
import LogoutLink from "./LogoutLink";

export default function Navigation() {
  const authLink = isAuth();

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center">
          <span>Logo</span>
          <div className="">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/activities">Events</Link>
            </Button>
            {authLink ? <MemberLinks /> : <GuestLinks />}
            {authLink && <LogoutLink />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

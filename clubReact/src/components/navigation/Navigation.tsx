import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { isAuth } from "@/actions/auth";
import { GuestLinks, MemberLinks } from "./NavLinks";
import LogoutLink from "./LogoutLink";

export default async function Navigation() {
  const authLink = await isAuth();

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold tracking-[1rem]">SYMC</span>
          <div className="flex gap-x-2">
            <Button className="text-base" variant="link" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button className="text-base" variant="link" asChild>
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

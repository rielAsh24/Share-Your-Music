import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuLogout,
  navigationTriggerStyle,
} from "./NavClient";

export function NavVisitor() {
  return (
    <NavigationMenu>
      <NavigationMenuLink asChild>
        <Link href="/">SYMC</Link>
      </NavigationMenuLink>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationTriggerStyle} asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationTriggerStyle} asChild>
            <Link href="/activities">Events</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationTriggerStyle} asChild>
            <Link href="/apply">Sign Up</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationTriggerStyle} asChild>
            <Link href="/login">Login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function NavMember() {
  return (
    <NavigationMenu>
      <NavigationMenuLink asChild>
        <Link href="/">SYMC</Link>
      </NavigationMenuLink>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationTriggerStyle} asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationTriggerStyle} asChild>
            <Link href="/activities">Events</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationTriggerStyle} asChild>
            <Link href="/profile">Profile</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationTriggerStyle}>
          <NavigationMenuLogout />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

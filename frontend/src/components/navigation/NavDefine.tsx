import Link from "next/link";
import {
  NavLogo,
  NavigationMenu,
  NavigationLink,
  NavigationMenuList,
  NavigationMenuLogout,
} from "./NavClient";

export function NavVisitor() {
  return (
    <NavigationMenu>
      <NavLogo />
      <NavigationMenuList>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/about">About</NavigationLink>
        <NavigationLink href="/apply">Sign Up</NavigationLink>
        <NavigationLink href="/login">Login</NavigationLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function NavMember() {
  return (
    <NavigationMenu>
      <NavLogo />
      <NavigationMenuList>
        <NavigationLink href="/members">Home</NavigationLink>
        <NavigationLink href="/members/activities">Events</NavigationLink>
        <NavigationLink href="/members/profile">Profile</NavigationLink>
        <NavigationMenuLogout />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

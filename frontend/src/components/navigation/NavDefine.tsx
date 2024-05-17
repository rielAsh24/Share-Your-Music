import { NavigationLink, NavigationMenuLogout } from "./NavClient";

export function NavVisitor() {
  return (
    <>
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/about">About</NavigationLink>
      <NavigationLink href="/apply">Sign Up</NavigationLink>
      <NavigationLink href="/login">Login</NavigationLink>
    </>
  );
}

export function NavMember() {
  return (
    <>
      <NavigationLink href="/members">Home</NavigationLink>
      <NavigationLink href="/members/activities">Events</NavigationLink>
      <NavigationLink href="/members/profile">Profile</NavigationLink>
      <NavigationMenuLogout />
    </>
  );
}

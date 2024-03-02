"use client";

import NavLink from "./NavLink";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "./ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
        Logo
      </NavigationMenuLink>
      <NavigationMenuList>
        <NavLink label="Home" link="/" />
        <NavLink label="Events" link="/activities" />
        <NavLink label="Login" link="/login" />
        <NavLink label="Join Us" link="/apply" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

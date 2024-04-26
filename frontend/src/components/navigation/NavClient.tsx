"use client";

import { logout } from "@/actions/auth";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "../ui/navigation-menu";

const navigationTriggerStyle: string = navigationMenuTriggerStyle();

function NavigationMenuLogout() {
  const onLogout = async () => {
    await logout();
  };

  return (
    <div className="hover:cursor-pointer" onClick={onLogout}>
      Logout
    </div>
  );
}

export {
  navigationTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationMenuLogout,
};

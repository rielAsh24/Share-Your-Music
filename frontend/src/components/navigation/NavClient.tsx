"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { logout } from "@/actions/auth";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Logo from "../Logo";

const navigationTriggerStyle: string = navigationMenuTriggerStyle();

function NavigationMenuLogout() {
  const onLogout = async () => {
    await logout();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className={navigationTriggerStyle}>
        Logout
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={onLogout}
          >
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function NavigationLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        className={navigationTriggerStyle}
        asChild
        active={isActive}
      >
        <Link href={href}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function NavLogo() {
  return (
    <Link href="/" className="size-fit">
      <Logo />
    </Link>
  );
}

export {
  NavLogo,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationLink,
  NavigationMenuViewport,
  NavigationMenuLogout,
};

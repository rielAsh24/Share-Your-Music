import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink
} from "./ui/navigation-menu";

export default function NavLink({
  label,
  link
}: {
  label: string;
  link: string;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink href={link} className={navigationMenuTriggerStyle()}>
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

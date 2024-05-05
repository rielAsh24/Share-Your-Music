import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex h-64 items-center bg-accent text-secondary-foreground">
      <footer className="container grid grid-cols-2 place-content-between">
        <div className="grid place-content-between">
          <Logo />
          <p> &copy; 2024 Share Your Music Club. All rights reversed.</p>
        </div>
        <div className="grid grid-flow-col place-content-end divide-x-2">
          <div className="grid gap-y-4 px-16 text-right">
            <Link href="/">Home</Link>
            <Link href="/members/events">Events</Link>
            <Link href="/apply">Sign Up</Link>
            <Link href="/login">Login</Link>
          </div>
          <div className="grid gap-y-4 px-16">
            <Link href="/">Socials 1</Link>
            <Link href="/">Socials 2</Link>
            <Link href="/">Socials 3</Link>
            <Link href="/">Socials 4</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

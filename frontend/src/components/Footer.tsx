import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex h-64 items-center border-0 border-t-2 border-t-muted">
      <footer className="container grid grid-cols-2 place-content-between">
        <div className="grid place-content-between">
          <Logo />
          <p className="text-muted-foreground/70">
            {" "}
            &copy; 2024 Share Your Music Club. All rights reversed.
          </p>
        </div>
        <div className="grid grid-flow-col place-content-end divide-x-2">
          <div className="grid gap-y-4 px-16 text-right">
            {[
              ["Home", "/"],
              ["Events", "/members/events"],
              ["Sign Up", "/apply"],
              ["Login", "/login"],
            ].map((link) => {
              return (
                <Link
                  key={link[0]}
                  className="text-muted-foreground/70 hover:text-primary"
                  href={link[1]}
                >
                  {link[0]}
                </Link>
              );
            })}
          </div>
          <div className="grid gap-y-4 px-16">
            {[
              ["Facebook", "/"],
              ["Instagram", "/"],
              ["X", "/"],
              ["YouTube", "/"],
            ].map((link) => {
              return (
                <Link
                  key={link[0]}
                  className="text-muted-foreground/70 hover:text-primary"
                  href={link[1]}
                >
                  {link[0]}
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

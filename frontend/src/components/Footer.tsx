import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex items-center border-0 border-t-2 border-t-muted max-sm:p-8 lg:h-64">
      <footer className="container grid place-content-between max-sm:gap-8 lg:grid-cols-2">
        <Logo />
        <div className="row-span-2 grid grid-flow-col place-content-start lg:place-content-end lg:divide-x-2">
          <div className="grid gap-4 pr-8 lg:text-right">
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
          <div className="grid gap-4 pl-8">
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
        <p className="self-end text-muted-foreground/70">
          {" "}
          &copy; 2024 Share Your Music Club. All rights reversed.
        </p>
      </footer>
    </div>
  );
}

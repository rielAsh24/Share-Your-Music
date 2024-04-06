import "@/styles/head_foot.sass";
import MobileMenu from "./MobileMenu.tsx";
import DesktopMenu from "./DesktopMenu.tsx";

export default function Menu() {
  return (
    <nav>
      <span className="logo-container">
        <h1 className="logo">SYMC</h1>
      </span>
      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
}

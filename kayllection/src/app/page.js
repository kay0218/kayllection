import DesktopIcons from "@/components/desktop-icons";
import KayLogo from "@/components/kay-logo";
import Nav from "@/components/nav-bg";
import "../css/stylesheet.scss";

export default function Home() {
  return (
    <div className="App">
      <DesktopIcons />
      <KayLogo />
      <Nav />
    </div>
  );
}

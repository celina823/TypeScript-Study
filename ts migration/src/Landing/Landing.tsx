import { HeaderLanding } from "./HeaderLanding";
import { MainLanding } from "./MainLanding";
import { FooterLanding } from "./FooterLanding";
import "./Landing.css";

export function Landing() {
  return (
    <div id="containerAll">
      <HeaderLanding />
      <MainLanding />
      <FooterLanding />
    </div>
  );
}

import { CTAs } from "./CTAs";
import { Countdown } from "./Countdown";

export function Footer() {
  return (
    <div className="footer">
      <Countdown />
      <CTAs />
    </div>
  );
}
